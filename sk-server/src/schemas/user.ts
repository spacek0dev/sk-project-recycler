import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Role, Person, Organization, Areas } from '.';
import { ApiProperty } from '@nestjs/swagger';

export type UsersDocument = Users & Document;

@Schema({ timestamps: true, collection: 'users' })
export class Users {
  @ApiProperty()
  @Prop({ required: false, default: true })
  enabled: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Person' })
  personId: Person;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
  organizationId: Organization;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Areas' })
  areasId: Areas;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Role' })
  roleId: Role;
}
export const UsersSchema = SchemaFactory.createForClass(Users);
