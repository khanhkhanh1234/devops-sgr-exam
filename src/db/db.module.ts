import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from '@/config';

import { User, UserSchema } from './entities';

@Module({
  imports: [
    MongooseModule.forRoot(config.mongo.url),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
