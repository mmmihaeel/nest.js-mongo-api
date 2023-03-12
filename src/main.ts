import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

const PORT: number = Number(process.env?.API_PORT) || 3000;

async function startServer() {
  const app = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.setGlobalPrefix('api');
  await app.listen(PORT, async (): Promise<void> => {
	// tslint:disable-next-line: no-console
	console.log(
		`API is listening on ${await app?.getUrl()}/api on ${process.pid}`,
	);
  });
}

startServer();