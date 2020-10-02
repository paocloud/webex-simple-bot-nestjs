import { Controller, Get } from '@nestjs/common';
import { HealthzService } from '../services/healthz.service';

@Controller()
export class HealthzController {
  constructor(
    private readonly healthzService: HealthzService,
  ) {}

  @Get('/healthz')
  postWebhook(): object {
    return this.healthzService.getHealthz();
  }
}