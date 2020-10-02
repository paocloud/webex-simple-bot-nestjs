import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { WebHookController } from '../controllers/webhook.controller';
import { WebHookService } from '../services/webhook.service';

@Module({
  imports: [
  	ConfigModule.forRoot({
  		envFilePath: '.env'
  	}),
  ],
  controllers: [WebHookController],
  providers: [WebHookService],
  exports: [WebHookService],
})

export class WebHookModule {}