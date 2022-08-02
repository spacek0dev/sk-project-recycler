import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Areas } from '.';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
export type OrganizationDocument = Organization & Document;

interface UbicationType {
  longitude?: string;
  latitude?: string;
}

@Schema({ timestamps: true, collection: 'organizations' })
export class Organization {
  ubication: UbicationType;
  @Prop({ required: false })
  name: string;
  @Prop({ required: false })
  email: string;
  @Prop({ required: false })
  phone: string;
  @Prop({ required: false })
  address: string;
  @Prop({ required: false })
  logo: string;
  @Prop({ required: false })
  extras: [];
  @Prop({ required: false })
  images: [];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Areas' })
  areasId: Areas;
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
