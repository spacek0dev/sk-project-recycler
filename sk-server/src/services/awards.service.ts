import { IResponse } from '../interfaces/responses';
import { Controller, Get, HttpStatus, Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Awards as Schema } from 'src/schemas';
import { AwardsDocument as schemaDocument } from 'src/schemas/awards';

@Injectable()
export class AwardsService {
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

  async readAll(): Promise<IResponse> {
    try {
      const documents = await this.model.find().exec();
      return { status: HttpStatus.OK, data: documents };
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
