/* eslint-disable prettier/prettier */
import { MeetingsService } from './meetings.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingsController } from './meetings.controller';
import { MeetingsRepository } from './meeting.repository';
import { EmployeeRepository } from 'src/employees/employee.repository';
import { EmployeesService } from 'src/employees/employees.service';
import { TasksService } from 'src/tasks/tasks.service';
import { TaskRepository } from 'src/tasks/task.repository';
import { ContactInfoRepository } from 'src/contactInfo/contact-info.repository';
import { ContactInfoService } from 'src/contactInfo/contact-info.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MeetingsRepository,
      EmployeeRepository,
      TaskRepository,
      ContactInfoRepository,
    ]),
  ],
  controllers: [MeetingsController],
  providers: [
    MeetingsService,
    EmployeesService,
    TasksService,
    ContactInfoService,
  ],
})
export class MeetingModule {}
