import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Hospital extends Document {
  @Prop()
  groupname: string;

  @Prop()
  hospitalname: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;
 
  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  city: string;

  @Prop({ type: String })
  country: string;

  @Prop({ type: String })
  phone: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

}

export const HospitalSchema = SchemaFactory.createForClass(Hospital);
export type HospitalDocument = Hospital & Document;