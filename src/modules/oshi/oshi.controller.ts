import {
  Body,
  Controller,
  Get,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Oshi } from './schemas/oshi.schema';
import { Model } from 'mongoose';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('oshi')
export class OshiController {
  constructor(@InjectModel(Oshi.name) private oshiModel: Model<Oshi>) {}

  @Get()
  async getAll() {
    return this.oshiModel.find().exec();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'public/image',
        filename: (req, file, cb) => {
          cb(null, file.originalname);
        },
      }),
    }),
  )
  async create(
    @Body() body,
    @UploadedFile(new ParseFilePipe({ validators: [] }))
    image: Express.Multer.File,
  ) {}
}
