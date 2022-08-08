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
  title: string;
  @ApiProperty()
  @Prop()
  message: string;
  @ApiProperty()
  @Prop()
  date: string;
  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Users.name })
  clientId: Users;
  @ApiProperty()
  @Prop()
  platform: string;
  @Prop()
  email: string;
}
export const ContactFormsSchema = SchemaFactory.createForClass(ContactForms);
