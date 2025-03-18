import { Injectable, Logger } from '@nestjs/common';
import { HogeService } from './hoge.service';

@Injectable()
export class FugaService {
  private readonly logger: Logger = new Logger('FugaService');
  private status: string = 'loading';

  constructor(private readonly hogeService: HogeService) {
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
