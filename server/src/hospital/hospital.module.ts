// hospital.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Hospital, HospitalSchema, } from './schema/hospital.schema';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Hospital.name, schema: HospitalSchema }])],
  controllers: [HospitalController],
  providers: [HospitalService],
})
export class HospitalModule {}
