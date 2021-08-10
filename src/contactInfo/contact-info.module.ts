/* eslint-disable prettier/prettier */
import { ContactInfoService } from './contact-info.service';
import { ContactInfoController } from './contact-info.controller';
import { ContactInfoRepository } from './contact-info.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { EmployeesService } from './../employees/employees.service';
import { EmployeeRepository } from './../employees/employee.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ContactInfoRepository, EmployeeRepository]),
  ],
  controllers: [ContactInfoController],
  providers: [ContactInfoService, EmployeesService],
})
export class ContactInfoModule {}
