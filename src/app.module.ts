import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HogeService } from './hoge.service';
import { FugaService } from './fuga.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [HogeService, FugaService],
})
export class AppModule {}
