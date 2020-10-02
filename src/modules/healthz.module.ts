import { Module } from '@nestjs/common';

import { HealthzController } from '../controllers/healthz.controller';
import { HealthzService } from '../services/healthz.service';

@Module({
  controllers: [HealthzController],
  providers: [HealthzService],
  exports: [HealthzService],
})

export class HealthzModule {}