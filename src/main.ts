import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const OPEN_API_ROOT = 'api/v1/docs';
export const OPEN_API_NAME = 'SUVI';
export const OPEN_API_DESCRIPTION = 'API Description';
export const OPEN_API_CURRENT_VERSION = '1.0';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const options = new DocumentBuilder()
  .setTitle(OPEN_API_NAME)
  .setDescription(OPEN_API_DESCRIPTION)
  .setVersion(OPEN_API_CURRENT_VERSION)
  .build();

  app.enableCors();

  // const globalPrefix = 'api/v1';
  const globalPrefix = 'suvi/api/v1';

  app.setGlobalPrefix(globalPrefix);

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(OPEN_API_ROOT, app, document);

  await app.listen(3000);
}
bootstrap();
