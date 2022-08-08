import { IResponse } from '../interfaces/responses';
import { Controller, Get, HttpStatus, Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from 'src/schemas';
import { RoleDocument } from 'src/schemas/role';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}
  async create(role: Role): Promise<IResponse> {
    try {
      const document = new this.roleModel(role);
      const _role = await document.save();
      return { status: HttpStatus.CREATED, data: _role };
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
    const count = await this.roleModel.count();
    try {
      const documents = await this.roleModel
        .find()
        .skip(_page == 1 ? 0 : _page * _pageSize)
        .limit(_pageSize)
        .exec();
      return { status: HttpStatus.OK, data: { rows: documents, count } };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }

  async readById(id): Promise<IResponse> {
    try {
      const document = await this.roleModel.findById(id).exec();
      return { status: HttpStatus.OK, data: document };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }

  async update(id, role: Role): Promise<IResponse> {
    try {
      const document = await this.roleModel.findByIdAndUpdate(id, role);
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
      const document = await this.roleModel.findByIdAndRemove(id);
      return { status: HttpStatus.OK, data: document };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }
}
