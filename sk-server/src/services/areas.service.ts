import { AreasDocument } from './../schemas/areas';
import { IResponse } from '../interfaces/responses';
import { Controller, Get, HttpStatus, Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Areas } from 'src/schemas';

@Injectable()
export class AreasService {
    constructor(@InjectModel(Areas.name) private areasModel: Model<AreasDocument>) { }
    async create(area: Areas): Promise<IResponse> {
        try {
            const document = new this.areasModel(area);
            let _area = await document.save();
            return { status: HttpStatus.CREATED, data: document };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }
    }

    async readAll(): Promise<IResponse> {
        try {
            let documents = await this.areasModel.find().exec();
            return { status: HttpStatus.OK, data: documents };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }
    }

    async readById(id): Promise<IResponse> {
        try {
            let document = await this.areasModel.findById(id).exec();
            return { status: HttpStatus.OK, data: document };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }
    }

    async update(id, area: Areas): Promise<IResponse> {
        try {
            let document = await this.areasModel.findByIdAndUpdate(id, area)
            return { status: HttpStatus.OK, data: document };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }

    }

    async delete(id): Promise<IResponse> {
        try {
            let document = await this.areasModel.findByIdAndRemove(id);
            return { status: HttpStatus.OK, data: document };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }
    }
    async getAreas(countryId: string): Promise<IResponse> {
        try {
            let match = { $match: { countryId: new mongoose.Types.ObjectId(countryId) } }
            let projection = { $project: { _id: 1, name: 1, group: 1, parentId: 1, parentGroupId: 1, countryId: 1 } };
            let document = await this.areasModel.aggregate([match, projection], {})
            let roots = document.filter((v: Areas) => v.group);
            roots.forEach((value) => {
                value.areas = document.filter(area => String(area.parentGroupId) == String(value._id));
            })
            return { status: HttpStatus.OK, data: roots };
        } catch (error) {
            return { status: HttpStatus.BAD_REQUEST, reason: 'We have a problem try again' };
        }
    }
}