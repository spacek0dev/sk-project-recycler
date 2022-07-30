
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type PersonDocument = Person & Document;

@Schema({ timestamps: true,collection:'persons' })
export class Person {
    @Prop({ required: false })
    firstname: String;
    @Prop({ required: false })
    lastname: String;
    @Prop({ required: true })
    email: String;
    @Prop({ required: true })
    password: String;
    @Prop({ required: true, unique: true })
    username: String;
    @Prop({ required: false })
    phone: String;
}

export const PersonSchema = SchemaFactory.createForClass(Person);