import { Controller, Get } from '@nestjs/common';
import { DeveloperService } from '../services/developer.service';

@Controller()
export class DeveloperController {
  constructor(
    private readonly developerService: DeveloperService,
  ) {}

  @Get('/developer')
  postWebhook(): object {
    return this.developerService.getDeveloperInfo();
  }
}