// doctor.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Doctor, DoctorDocument } from './schema/doctor.schema';

@Injectable()
export class DoctorService {
  constructor(@InjectModel(Doctor.name) private readonly doctorModel: Model<DoctorDocument>) {}

  async create(doctorData: Partial<Doctor>): Promise<Doctor> {
    const createdDoctor = new this.doctorModel(doctorData);
    return createdDoctor.save();
  }

  async findById(id: string): Promise<Doctor | null> {
    return this.doctorModel.findById(id).exec();
  }


}
