import { IResponse } from 'src/interfaces/responses';
import { Controller, Get, HttpStatus, Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person, Users } from 'src/schemas';
import { PersonDocument } from 'src/schemas/person';
import { UsersDocument } from 'src/schemas/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}
  async getAllUsers(page, pageSize): Promise<IResponse> {
    const _page = parseInt(page) || 1;
    const _pageSize = parseInt(pageSize) || 20;
    try {
      const count = await this.usersModel.count();
      const document = await this.usersModel
        .find(
          {},
          {
            personId: 1,
            organizationId: 1,
            roleId: 1,
            _id: 1,
            enabled: 1,
          },
        )
        .sort({ _id: -1 })
        .populate(
          'personId',
          '_id firstname lastname username phone email address dni addressReference terms_conditions',
        )
        .populate('roleId', '_id name')
        .populate({
          path: 'areasId',
          select: '_id name group countryId',
          populate: { path: 'countryId', select: '_id name key currency' },
        })
        .populate({ path: 'organizationId', match: 'organizationId' != null })
        .skip(_page == 1 ? 0 : (_page - 1) * _pageSize)
        .limit(_pageSize)
        .exec();

      return { status: HttpStatus.OK, data: { rows: document, count } };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }
}
