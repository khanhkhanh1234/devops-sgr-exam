import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { DatabaseModule } from '@/db/db.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, TerminusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
