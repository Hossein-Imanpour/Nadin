import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoModule } from './to-do/to-do.module';
import { config } from '../src/config/keys.js';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), ToDoModule],
  // imports: [ToDoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
