/* eslint-disable prettier/prettier */

import { TaskRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [ TypeOrmModule.forFeature([TaskRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
