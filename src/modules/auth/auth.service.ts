import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user/schemas/user.schema';
import { Model } from 'mongoose';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async login(params: { username: string; password: string }) {
    const hashedPassword = crypto
      .createHash('md5')
      .update(params.password)
      .digest('hex');
    return this.userModel
      .findOne({
        $and: [{ username: params.username }, { password: hashedPassword }],
      })
      .exec();
  }

  async register(params: { name: string; username: string; password: string }) {
    const hashedPassword = crypto
      .createHash('md5')
      .update(params.password)
      .digest('hex');
    this.userModel.create({
      name: params.name,
      username: params.username,
      password: hashedPassword,
      createdAt: Date.now(),
    });
  }
}
