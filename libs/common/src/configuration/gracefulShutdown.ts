import { type INestApplication, Logger } from '@nestjs/common';

export function sigInt(app: INestApplication): void {
  process.on('SIGINT', async () => {
    Logger.log('Server close by user');
    await app.close();
    process.exit(0);
  });
}

export function sigTerm(app: INestApplication): void {
  process.on('SIGTERM', async () => {
    Logger.log('Server close by system');
    await app.close();
    process.exit(0);
  });
}
