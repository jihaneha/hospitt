// auth.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

  async register(userDto: CreateUserDto): Promise<User> {
    let createdUser: User;

    if (userDto.role === 'doctor') {
      const { groupname, hospitalname, ...doctorProperties } = userDto;
      createdUser = new this.userModel(doctorProperties);
      createdUser.role = 'doctor';
    } else if (userDto.role === 'hospital') {
      const { speciality, ...hospitalProperties } = userDto;
      createdUser = new this.userModel(hospitalProperties);
      createdUser.role = 'hospital';
    } else {
      // Default case for "user" role
      createdUser = new this.userModel(userDto);
      createdUser.role = 'user';
    }

    return createdUser.save();
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
