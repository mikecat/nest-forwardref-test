import { Controller, Get } from '@nestjs/common';
import { HogeService } from './hoge.service';
import { FugaService } from './fuga.service';

@Controller()
export class AppController {
  constructor(
    private readonly hogeService: HogeService,
    private readonly fugaService: FugaService
  ) {}

  @Get()
  getData() {
    return {
      hoge: {
        hoge: this.hogeService.getHoge(),
        fuga: this.hogeService.getFugaFromFugaService(),
        status: this.hogeService.getStatus(),
      },
      fuga: {
        hoge: this.fugaService.getHogeFromHogeService(),
        fuga: this.fugaService.getFuga(),
        status: this.fugaService.getStatus(),
      },
    };
  }
}
