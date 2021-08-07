/* eslint-disable prettier/prettier */
import { MeetingsService } from './meetings.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MeetingsController } from './meetings.controller';
import { MeetingsRepository } from './meeting.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MeetingsRepository])],
  controllers: [MeetingsController],
  providers: [MeetingsService],
})
export class MeetingModule {}
