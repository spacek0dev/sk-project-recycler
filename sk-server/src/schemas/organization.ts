
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';
export type OrganizationDocument = Organization & Document;

interface UbicationType {
    longitude?: string,
    latitude?: string
}

@Schema({timestamps:true,collection:'organizations'})
export class Organization {
    ubication: UbicationType;
    @Prop({ required: false })
    name: String;
    @Prop({ required: false })
    email: String;
    @Prop({ required: false })
    phone: String;
    @Prop({ required: false })
    address: String;
    @Prop({ required: false })
    logo: String;
    @Prop({ required: false })
    extras: [];
    @Prop({ required: false })
    images: [];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
