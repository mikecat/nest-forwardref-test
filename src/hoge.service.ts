import { Injectable, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { FugaService } from './fuga.service';

@Injectable()
export class HogeService {
  private readonly logger: Logger = new Logger('HogeService');
  private readonly fugaService: FugaService;
  private status: string = 'loading';

  constructor(private moduleRef: ModuleRef) {
    this.fugaService = this.moduleRef.get(FugaService);
    this.logger.log('loading...');
    setTimeout(() => {
      this.status = 'ready';
      this.logger.log('load completed!');
    }, 1000);
  }

  getHoge(): string {
    return 'hoge';
  }

  getFugaFromFugaService(): string {
    return 'got: ' + this.fugaService.getFuga();
  }

  getStatus(): string {
    return this.status;
  }
}
