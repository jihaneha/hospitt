import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
})
export class User extends Document {
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

  @Prop({ type: String })
  speciality: string;

  @Prop({ default: 'user' })
  role: 'user' | 'doctor' | 'hospital';
}

export const UserSchema = SchemaFactory.createForClass(User);
export type UserDocument = User & Document;