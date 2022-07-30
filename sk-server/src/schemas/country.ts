
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type CountryDocument = Country & Document;
@Schema({ timestamps: true, collection: 'countrys' })
export class Country {
    @ApiProperty()
    @Prop()
    key: String;

    @ApiProperty()
    @Prop()
    name: String;

    @ApiProperty()
    @Prop()
    currency: String;
}
export const CountrySchema = SchemaFactory.createForClass(Country);