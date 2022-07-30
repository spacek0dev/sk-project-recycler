import { CountryDocument } from 'src/schemas/country';
import { IResponse } from '../interfaces/responses';
import { Controller, Get, HttpStatus, Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from 'src/schemas';

@Injectable()
export class CountryService {
    constructor(@InjectModel(Country.name) private countryModel: Model<CountryDocument>) { }
    async create(country: Country): Promise<IResponse> {
        try {
            const document = new this.countryModel(country);
            let _country = await document.save();
            return { status: HttpStatus.CREATED, data: _country };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }
    }

    async readAll(): Promise<IResponse> {
        try {
            let documents = await this.countryModel.find().exec();
            return { status: HttpStatus.OK, data: documents };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }
    }

    async readById(id): Promise<IResponse> {
        try {
            let document = await this.countryModel.findById(id).exec();
            return { status: HttpStatus.OK, data: document };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }
    }

    async update(id, country: Country): Promise<IResponse> {
        try {
            let document = await this.countryModel.findByIdAndUpdate(id, country)
            return { status: HttpStatus.OK, data: document };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }

    }

    async delete(id): Promise<IResponse> {
        try {
            let document = await this.countryModel.findByIdAndRemove(id);
            return { status: HttpStatus.OK, data: document };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }
    }
}