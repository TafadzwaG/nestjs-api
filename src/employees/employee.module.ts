/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { EmployeesService } from './employees.service';
import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRepository])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeeModule {}
