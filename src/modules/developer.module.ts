import { Module } from '@nestjs/common';

import { DeveloperController } from '../controllers/developer.controller';
import { DeveloperService } from '../services/developer.service';

@Module({
  controllers: [DeveloperController],
  providers: [DeveloperService],
  exports: [DeveloperService],
})

export class DeveloperModule {}