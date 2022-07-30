import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Users } from './user';
import { Awards } from './awards';
export type UserAwardsDocument = UserAwards & Document;
@Schema({ timestamps: true, collection: 'userawards' })
export class UserAwards {
    @ApiProperty()
    @Prop()
    date: String
    @ApiProperty()
    @Prop()
    claimed: boolean;
    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Awards.name })
    awardId: Awards;
    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Users.name })
    userId: Users;

}
export const UserAwardsSchema = SchemaFactory.createForClass(UserAwards);