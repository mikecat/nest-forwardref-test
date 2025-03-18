import { Injectable, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { HogeService } from './hoge.service';

@Injectable()
export class FugaService {
  private readonly logger: Logger = new Logger('FugaService');
  private readonly hogeService: HogeService;
  private status: string = 'loading';

  constructor(private moduleRef: ModuleRef) {
    this.hogeService = this.moduleRef.get(HogeService);
    this.logger.log('loading...');
    setTimeout(() => {
      this.status = 'ready';
      this.logger.log('load completed!');
    }, 1000);
  }

  getFuga(): string {
    return 'fuga';
  }

  getHogeFromHogeService(): string {
    return 'got: ' + this.hogeService.getHoge();
  }

  getStatus(): string {
    return this.status;
  }
}
