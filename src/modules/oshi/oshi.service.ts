import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Oshi, OshiDocument } from './schemas/oshi.schema';
import { Model } from 'mongoose';

@Injectable()
export class OshiService {
  constructor(@InjectModel(Oshi.name) private oshiModel: Model<Oshi>) {}

  async getAll() {
    return this.oshiModel.find().exec();
  }
}
