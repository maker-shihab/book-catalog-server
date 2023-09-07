/* eslint-disable no-console */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

process.on('uncaughtException', error => {
  // Log the error, but don't exit the process in production
  console.error('Uncaught Exception:', error);
});

let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Book Catalog Database is connected successfully');

    server = app.listen(config.port, () => {
      console.log(`Application  listening on port ${config.port}`);
    });
  } catch (err) {
    console.error('Failed to connect to the database:', err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.error('Unhandled Rejection:', error);
        process.exit(1);
      });
    } else {
      console.error('Unhandled Rejection:', error);
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  console.log('SIGTERM is received');
  if (server) {
    server.close();
  }
});
