import { Module, NestModule ,MiddlewareConsumer } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebHookModule } from './modules/webhook.module';
import { HealthzModule } from './modules/healthz.module';
import { DeveloperModule } from './modules/developer.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [
    WebHookModule,
    HealthzModule,
    DeveloperModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    if(process.env.STAGE === 'develop'){
      consumer
        .apply(LoggerMiddleware)
        .forRoutes('*');
    }
  }
}
