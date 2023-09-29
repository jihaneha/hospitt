

import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './schema/doctor.schema';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  async create(@Body() doctorData: Partial<Doctor>) {
    const createdDoctor = await this.doctorService.create(doctorData);
    return createdDoctor;
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const doctor = await this.doctorService.findById(id);
    if (!doctor) {
      throw new NotFoundException('Doctor not found');
    }
    return doctor;
  }
}
