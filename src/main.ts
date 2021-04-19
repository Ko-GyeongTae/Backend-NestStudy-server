import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  const connection = await createConnection({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "test"
  })
  .then(() => { 
    console.log("Connect to DB successfullly!") 
  })
  .catch(error => console.log(error));
  await app.listen(4000);
}
bootstrap();
