import { Organization } from 'src/schemas';
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type PartnersDocument = Partners & Document;
@Schema({ timestamps: true, collection: 'partners' })
export class Partners {
  @ApiProperty()
  @Prop()
  name: string;
  @ApiProperty()
  @Prop()
  email: string;
  @ApiProperty()
  @Prop()
  phone: string;
  @ApiProperty()
  @Prop()
  address: string;
  @ApiProperty()
  @Prop()
  logo: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Organization' })
  organizationId: Organization;
}
export const PartnersSchema = SchemaFactory.createForClass(Partners);
