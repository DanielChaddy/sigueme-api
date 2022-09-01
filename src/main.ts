import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const bodyParser = require('body-parser')
  app.use(bodyParser.json({type: 'application/json', limit: '1mb'}))
  await app.listen(3000);
}
bootstrap();
