import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from './user';

export type ContactFormsDocument = ContactForms & Document;
@Schema({ timestamps: true, collection: 'contactforms' })
export class ContactForms {
    @ApiProperty()
    @Prop()
    title: String
    @ApiProperty()
    @Prop()
    message: String
    @ApiProperty()
    @Prop()
    date: String
    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Users.name })
    userId: Users;
    @ApiProperty()
    @Prop()
    platform: String
    @Prop()
    email: String

}
export const ContactFormsSchema = SchemaFactory.createForClass(ContactForms);