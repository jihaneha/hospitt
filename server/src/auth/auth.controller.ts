// src/auth/auth.controller.ts

import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/signup.dto';
import { User } from './schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async register(@Body() createUserDto: CreateUserDto): Promise<User> {
    // Check if the email is already registered
    const existingUser = await this.authService.findOneByEmail(createUserDto.email);
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    // Register the user
    return this.authService.register(createUserDto);
  }
}
