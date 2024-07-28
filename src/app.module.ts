import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { CommonModule } from './modules/common/common.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OshiModule } from './modules/oshi/oshi.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    CommonModule,
    MongooseModule.forRoot('mongodb://localhost/oshiomoi'),
    OshiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
