import { Module } from '@nestjs/common';
import { OshiController } from './oshi.controller';
import { OshiService } from './oshi.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Oshi, OshiSchema } from './schemas/oshi.schema';

@Module({
  controllers: [OshiController],
  providers: [OshiService],
  imports: [
    MongooseModule.forFeature([{ name: Oshi.name, schema: OshiSchema }]),
  ],
})
export class OshiModule {}
