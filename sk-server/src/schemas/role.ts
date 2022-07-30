
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type RoleDocument = Role & Document;
@Schema({ timestamps: true, collection: 'roles' })
export class Role {

    @ApiProperty()
    @Prop()
    key: String;

    @ApiProperty()
    @Prop()
    name: String;
}
export const RoleSchema = SchemaFactory.createForClass(Role);