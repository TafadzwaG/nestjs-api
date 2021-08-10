/* eslint-disable prettier/prettier */
import { EmployeesService } from './../employees/employees.service';
import { EmployeeRepository } from './../employees/employee.repository';
import { TaskRepository } from './task.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository, EmployeeRepository])],
  controllers: [TasksController],
  providers: [TasksService, EmployeesService],
})
export class TasksModule {}
