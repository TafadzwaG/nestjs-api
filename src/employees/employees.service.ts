/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { Employee } from './employee.entity';
import { EmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeeRepository)
    private employeeRepository: EmployeeRepository,
  ) {}

  async createEmployee(employeeDto: EmployeeDto): Promise<Employee> {
    return this.employeeRepository.createEmployee(employeeDto);
  }
}
