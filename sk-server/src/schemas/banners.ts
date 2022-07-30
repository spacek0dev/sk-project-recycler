
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type BannersDocument = Banners & Document;
@Schema({ timestamps: true, collection: 'banners' })
export class Banners {

    @ApiProperty()
    @Prop()
    image: String;

    @ApiProperty()
    @Prop()
    slug: String;

    @ApiProperty()
    @Prop()
    title: String;

    @ApiProperty()
    @Prop()
    status: Boolean;
}
export const BannersSchema = SchemaFactory.createForClass(Banners);