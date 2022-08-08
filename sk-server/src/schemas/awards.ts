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
  name: string;
  @ApiProperty()
  @Prop()
  image: string;
  @ApiProperty()
  @Prop()
  score: number;
  @ApiProperty()
  @Prop()
  amount: number;
  @ApiProperty()
  @Prop()
  initAmount: number;
  @ApiProperty()
  @Prop()
  endTime: string;
  @ApiProperty()
  @Prop()
  description: string;
  @ApiProperty()
  @Prop()
  type: string;
  @ApiProperty()
  @Prop()
  code: string;
  @ApiProperty()
  @Prop()
  termsAndConditions: string;
  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Partners.name })
  partnersId: Partners;
  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: AwardCategorys.name })
  categoryId: AwardCategorys;
}
export const AwardsSchema = SchemaFactory.createForClass(Awards);
