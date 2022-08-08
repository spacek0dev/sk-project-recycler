import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type BannersDocument = Banners & Document;
@Schema({ timestamps: true, collection: 'banners' })
export class Banners {
  @ApiProperty()
  @Prop()
  image: string;

  @ApiProperty()
  @Prop()
  slug: string;

  @ApiProperty()
  @Prop()
  title: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  isLearn: boolean;

  @ApiProperty()
  @Prop()
  status: boolean;
}
export const BannersSchema = SchemaFactory.createForClass(Banners);
