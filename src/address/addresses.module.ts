/* eslint-disable prettier/prettier */
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { Module } from '@nestjs/common';
import { EmployeeRepository } from './../employees/employee.repository';
import { EmployeesService } from './../employees/employees.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressRepository } from './address.repository';
import { ContactInfoRepository } from 'src/contactInfo/contact-info.repository';
import { ContactInfoService } from 'src/contactInfo/contact-info.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      AddressRepository,
      ContactInfoRepository,
      EmployeeRepository,
    ]),
  ],
  controllers: [AddressesController],
  providers: [AddressesService, ContactInfoService, EmployeesService],
})
export class AddressesModule {}
