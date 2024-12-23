import helmet from '@fastify/helmet';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3000;

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  app.enableCors();

  await app.register(helmet as any, { contentSecurityPolicy: false });

  await app.listen(
    PORT,
    '0.0.0.0',
    () => { Logger.log(`Application is listening on port ${PORT}`, 'NestApplication'); },
  );
}

void bootstrap();
