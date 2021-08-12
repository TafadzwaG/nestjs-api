/* eslint-disable prettier/prettier */
import { MeetingsService } from './meetings.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeetingsController } from './meetings.controller';
import { MeetingsRepository } from './meeting.repository';
import { EmployeeRepository } from 'src/employees/employee.repository';
import { EmployeesService } from 'src/employees/employees.service';

@Module({
  imports: [TypeOrmModule.forFeature([MeetingsRepository, EmployeeRepository])],
  controllers: [MeetingsController],
  providers: [MeetingsService, EmployeesService],
})
export class MeetingModule {}
