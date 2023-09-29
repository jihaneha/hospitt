// hospital.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hospital, HospitalDocument } from './schema/hospital.schema'; 

@Injectable()
export class HospitalService {
  constructor(@InjectModel(Hospital.name) private readonly hospitalModel: Model<HospitalDocument>) {}

  async create(hospitalData: Partial<Hospital>): Promise<Hospital> {
    const createdHospital = new this.hospitalModel(hospitalData);
    return createdHospital.save();
  }

  async findById(id: string): Promise<Hospital | null> {
    return this.hospitalModel.findById(id).exec();
  }

}
