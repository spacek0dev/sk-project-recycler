
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type AwardCategorysDocument = AwardCategorys & Document;
@Schema({ timestamps: true, collection: 'awardcategorys' })
export class AwardCategorys {
    @ApiProperty()
    @Prop()
    name: String;
    @ApiProperty()
    @Prop()
    image: String;
}
export const AwardCategorysSchema = SchemaFactory.createForClass(AwardCategorys);