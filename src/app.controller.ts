import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private health: HealthCheckService,
    private mongoose: MongooseHealthIndicator,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health')
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.health.check([() => this.mongoose.pingCheck('mongoose')]);
  }
}
