import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = config.getOrThrow('APP_PORT');
  const hostname = config.getOrThrow('APP_HOSTNAME');

  await app.listen(port, hostname, () => {
    console.log(`Started at ${hostname}:${port}`);
  });
}
bootstrap();
