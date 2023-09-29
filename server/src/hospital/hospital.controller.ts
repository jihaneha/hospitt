// hospital.controller.ts

import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { Hospital } from './schema/hospital.schema';

@Controller('hospitals')
export class HospitalController {
  constructor(private readonly hospitalService: HospitalService) {}

  @Post()
  async create(@Body() hospitalData: Partial<Hospital>) {
    const createdHospital = await this.hospitalService.create(hospitalData);
    return createdHospital;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const hospital = await this.hospitalService.findById(id);
    if (!hospital) {
      throw new NotFoundException('Hospital not found');
    }
    return hospital;
  }


}
