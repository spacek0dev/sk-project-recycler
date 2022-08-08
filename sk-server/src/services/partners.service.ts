import { IResponse } from '../interfaces/responses';
import { Controller, Get, HttpStatus, Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Partners as Schema } from 'src/schemas';
import { PartnersDocument as schemaDocument } from 'src/schemas/partners';

@Injectable()
export class PartnersService {
  constructor(@InjectModel(Schema.name) private model: Model<schemaDocument>) {}
  async create(schema: Schema): Promise<IResponse> {
    try {
      const document = new this.model(schema);
      const _schema = await document.save();
      return { status: HttpStatus.CREATED, data: _schema };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }

  async readAll(page, pageSize, organizationId): Promise<IResponse> {
    const _page = parseInt(page) || 1;
    const _pageSize = parseInt(pageSize) || 20;
    try {
      const count = await this.model.count();
      if (organizationId) {
        const documents = await this.model
          .find({ organizationId: organizationId })
          .skip(_page == 1 ? 0 : _page * _pageSize)
          .limit(_pageSize)
          .exec();
        return { status: HttpStatus.OK, data: { rows: documents, count } };
      } else {
        const documents = await this.model
          .find()
          .skip(_page == 1 ? 0 : _page * _pageSize)
          .limit(_pageSize)
          .exec();
        return { status: HttpStatus.OK, data: { rows: documents, count } };
      }
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }

  async readById(id): Promise<IResponse> {
    try {
      const document = await this.model.findById(id).exec();
      return { status: HttpStatus.OK, data: document };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }

  async update(id, schema: Schema): Promise<IResponse> {
    try {
      const document = await this.model.findByIdAndUpdate(id, schema);
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
      const document = await this.model.findByIdAndRemove(id);
      return { status: HttpStatus.OK, data: document };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }
}
