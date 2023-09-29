import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorController } from './doctor/doctor.controller';
import { HospitalController } from './hospital/hospital.controller';
import { DoctorModule } from './doctor/doctor.module';
import { HospitalModule } from './hospital/hospital.module';

@Module({
  imports: [    MongooseModule.forRoot('mongodb+srv://hospit:rFcljUearqSvRt8i@cluster0.wihhzgi.mongodb.net/?retryWrites=true&w=majority'),
  AuthModule,
DoctorModule,
HospitalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
