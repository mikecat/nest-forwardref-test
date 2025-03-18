import { forwardRef, Inject, Injectable, Logger } from '@nestjs/common';
import { FugaService } from './fuga.service';

@Injectable()
export class HogeService {
  private readonly logger: Logger = new Logger('HogeService');
  private status: string = 'loading';

  constructor(
    @Inject(forwardRef(() => FugaService))
    private readonly fugaService: FugaService,
  ) {
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
