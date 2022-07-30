import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from './user';

export type BagsDocument = Bags & Document;
@Schema({ timestamps: true, collection: 'bags' })
export class Bags {
    @Prop()
    count: Number
    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Users.name })
    collaboratorId: Users;
    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Users.name })
    userId: Users;
}
export const BagsSchema = SchemaFactory.createForClass(Bags);