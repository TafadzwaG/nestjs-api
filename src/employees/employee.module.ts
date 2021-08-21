/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { EmployeesService } from './employees.service';
import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
// import { MeetingsRepository } from 'src/meetings/meeting.repository';
// import { MeetingsService } from 'src/meetings/meetings.service';
@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRepository])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
  exports: [EmployeesService]
})
export class EmployeeModule {}
