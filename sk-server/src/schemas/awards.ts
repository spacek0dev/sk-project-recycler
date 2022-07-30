import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from './user';
import { Partners } from './partners';
import { AwardCategorys } from './awardCategorys';

export type AwardsDocument = Awards & Document;
@Schema({ timestamps: true, collection: 'awards' })
export class Awards {
    @ApiProperty()
    @Prop()
    name: String
    @ApiProperty()
    @Prop()
    image: String
    @ApiProperty()
    @Prop()
    score: Number
    @ApiProperty()
    @Prop()
    amount: Number
    @ApiProperty()
    @Prop()
    initAmount: Number
    @ApiProperty()
    @Prop()
    endTime: String
    @ApiProperty()
    @Prop()
    description: String
    @ApiProperty()
    @Prop()
    type: String
    @ApiProperty()
    @Prop()
    termsAndConditions: String
    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Partners.name })
    partnerId: Partners;
    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AwardCategorys.name })
    categoryIdId: AwardCategorys;

}
export const AwardsSchema = SchemaFactory.createForClass(Awards);