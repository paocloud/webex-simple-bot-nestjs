import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as chalk from "chalk";

import { appSetup } from './app.setup';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: true
  });
  const port = Number(process.env.PORT) || 3000

  appSetup(app)
  
  await app.listen(port, '0.0.0.0',() => {
  	console.log(chalk.hex('#07F3E9').bold(`\n ⭐ Webex Bot by NestJS Server running at port `) + chalk.hex('#F32F07').bold(`${port}`) + '\n')
  });
}

bootstrap();
