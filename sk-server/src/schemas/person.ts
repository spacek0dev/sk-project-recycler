import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonDocument = Person & Document;

@Schema({ timestamps: true, collection: 'persons' })
export class Person {
  @Prop({ required: false })
  firstname: string;
  @Prop({ required: false })
  lastname: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: false })
  phone: string;
  @Prop({ required: true, unique: true })
  dni: string;
  @Prop({ required: true })
  address: string;
  @Prop({ required: true })
  addressReference: string;
  @Prop({ required: true })
  terms_conditions: boolean;
}

export const PersonSchema = SchemaFactory.createForClass(Person);
