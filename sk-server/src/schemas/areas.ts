import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Country } from './country';

export type AreasDocument = Areas & Document;
@Schema({ timestamps: true, collection: 'areas' })
export class Areas {
  @ApiProperty()
  @Prop()
  key: string;

  @ApiProperty()
  @Prop()
  name: string;

  @ApiProperty()
  @Prop()
  group: boolean;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Country.name })
  countryId: Country;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Areas.name })
  parentId: Areas;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Areas.name })
  parentGroupId: Areas;
}
export const AreasSchema = SchemaFactory.createForClass(Areas);
