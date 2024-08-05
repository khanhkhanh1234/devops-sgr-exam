import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.app.port);
  console.log(`App is running with port ${config.app.port}`);
}
bootstrap();
