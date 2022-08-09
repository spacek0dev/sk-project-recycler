import { IResponse } from 'src/interfaces/responses';
import { Controller, Get, HttpStatus, Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization, OrganizationDocument } from 'src/schemas/organization';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(Organization.name)
    private organizationModel: Model<OrganizationDocument>,
  ) {}

  async create(organization: Organization): Promise<IResponse> {
    try {
      const document = new this.organizationModel(organization);
      const _organization = await document.save();
      return { status: HttpStatus.CREATED, data: _organization };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }

  async readAll(page, pageSize): Promise<IResponse> {
    const _page = parseInt(page) || 1;
    const _pageSize = parseInt(pageSize) || 20;
    try {
      const count = await this.organizationModel.count();
      const document = await this.organizationModel
        .find()
        .populate('areasId')
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

  async readById(id): Promise<IResponse> {
    try {
      const document = await this.organizationModel.findById(id).exec();
      return { status: HttpStatus.OK, data: document };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }

  async delete(id): Promise<IResponse> {
    try {
      const document = await this.organizationModel.findByIdAndRemove(id);
      return { status: HttpStatus.OK, data: document };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }

  async update(id, organization: Organization): Promise<IResponse> {
    try {
      const document = await this.organizationModel.findByIdAndUpdate(
        id,
        organization,
      );
      return { status: HttpStatus.OK, data: document };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }
}
