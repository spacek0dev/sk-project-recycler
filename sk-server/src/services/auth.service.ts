import {
  Controller,
  Get,
  Injectable,
  Req,
  UnauthorizedException,
  HttpStatus,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IAuth, IAuthOrganization, ILogin } from 'src/interfaces/auth';
import { IResponse } from 'src/interfaces/responses';
import { Person, Role, Users } from 'src/schemas';
import { Organization, OrganizationDocument } from 'src/schemas/organization';
import { PersonDocument } from 'src/schemas/person';
import { RoleDocument } from 'src/schemas/role';
import { UsersDocument } from 'src/schemas/user';
import { encryptPassword, validatePassword } from 'src/utils/auth';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
    @InjectModel(Users.name) private userModel: Model<UsersDocument>,
    @InjectModel(Organization.name)
    private organizationModel: Model<OrganizationDocument>,
  ) {}
  async login(auth: ILogin): Promise<IResponse> {
    const existUser = await this.personModel.findOne({
      username: auth.username,
    });
    if (existUser) {
      const validate = await validatePassword(
        auth.password,
        existUser.password,
      );
      if (validate) {
        const user = await this.userModel.findOne({ personId: existUser._id });
        const payload = { sub: user._id, enabled: user.enabled };
        return {
          status: HttpStatus.OK,
          access_token: this.jwtService.sign(payload),
        };
      } else {
        return { status: HttpStatus.BAD_REQUEST, reason: 'Password incorrect' };
      }
    } else {
      return { status: HttpStatus.NOT_FOUND, reason: 'User not found' };
    }
  }
  async register(auth: IAuth): Promise<IResponse> {
    auth.person.password = await encryptPassword(auth.person.password);
    const existUser = await this.personModel
      .findOne({ username: auth.person.username })
      .exec();
    if (existUser)
      return {
        status: HttpStatus.CONFLICT,
        reason: 'The username alreay used',
      };
    const _person = new this.personModel(auth.person);
    if (!_person)
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    const _user = new this.userModel({
      roleId: auth.roleId,
      personId: _person._id,
      areasId: auth.areasId,
      organizationId: auth.organizationId ? auth.organizationId : null,
    });
    if (!_user)
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    await _person.save();
    await _user.save();
    return { status: HttpStatus.CREATED, data: _user };
  }
  async registerWithOrganization(body: IAuthOrganization): Promise<IResponse> {
    const auth = body.user;
    const organization = body.organization;
    auth.person.password = await encryptPassword(auth.person.password);
    const existUser = await this.personModel
      .findOne({ username: auth.person.username })
      .exec();
    if (existUser)
      return {
        status: HttpStatus.CONFLICT,
        reason: 'The username alreay used',
      };
    const _organization = new this.organizationModel(organization);
    if (!_organization)
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    const _person = new this.personModel(auth.person);
    if (!_person)
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    const _user = new this.userModel({
      roleId: auth.roleId,
      personId: _person._id,
      organizationId: _organization._id,
    });
    if (!_user)
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    await _person.save();
    await _organization.save();
    await _user.save();
    return { status: HttpStatus.CREATED, data: _user };
  }
  async getUserInformation({ userId }: any): Promise<IResponse> {
    const user = await this.userModel
      .findById(userId, {
        personId: 1,
        organizationId: 1,
        roleId: 1,
        _id: 1,
        enabled: 1,
      })
      .populate('personId', '_id firstname lastname username phone email')
      .populate('roleId', '_id name')
      .populate({
        path: 'areasId',
        select: '_id name group countryId',
        populate: { path: 'countryId', select: '_id name key currency' },
      })
      .populate({ path: 'organizationId', match: 'organizationId' != null })
      .exec();

    return { status: HttpStatus.OK, data: user };
  }
}
