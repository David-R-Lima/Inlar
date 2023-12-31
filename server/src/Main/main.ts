import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://sensible-marmoset-violently.ngrok-free.app'
    ]
  })

  await app.listen(3333);
}
bootstrap();
