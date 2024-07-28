import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.login({
      username: body.username,
      password: body.password,
    });
    if (!user) throw new HttpException('Login invalid', HttpStatus.BAD_REQUEST);
    return user;
  }

  @Post('register')
  async register(
    @Body() body: { name: string; username: string; password: string },
  ) {
    try {
      await this.authService.register({
        name: body.name,
        username: body.username,
        password: body.password,
      });
      return;
    } catch (err) {
      throw new HttpException(
        'Internval server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
