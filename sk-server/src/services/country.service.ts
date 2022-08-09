import { CountryDocument } from 'src/schemas/country';
import { IResponse } from '../interfaces/responses';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from 'src/schemas';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<CountryDocument>,
  ) {}
  async create(country: Country): Promise<IResponse> {
    try {
      const document = new this.countryModel(country);
      const _country = await document.save();
      return { status: HttpStatus.CREATED, data: _country };
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
      const count = await this.countryModel.count();
      const documents = await this.countryModel
        .find()
        .skip(_page == 1 ? 0 : (_page - 1) * _pageSize)
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
      const document = await this.countryModel.findById(id).exec();
      return { status: HttpStatus.OK, data: document };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }

  async update(id, country: Country): Promise<IResponse> {
    try {
      const document = await this.countryModel.findByIdAndUpdate(id, country);
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
      const document = await this.countryModel.findByIdAndRemove(id);
      return { status: HttpStatus.OK, data: document };
    } catch (error) {
      return {
        status: HttpStatus.BAD_REQUEST,
        reason: 'We have a problem try again',
      };
    }
  }
}
