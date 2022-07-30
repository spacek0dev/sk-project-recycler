
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type PartnersDocument = Partners & Document;
@Schema({ timestamps: true, collection: 'partners' })
export class Partners {
    @ApiProperty()
    @Prop()
    name: String;
    @ApiProperty()
    @Prop()
    email: String;
    @ApiProperty()
    @Prop()
    phone: String;
    @ApiProperty()
    @Prop()
    address: String;
    @ApiProperty()
    @Prop()
    logo: String;
}
export const PartnersSchema = SchemaFactory.createForClass(Partners);