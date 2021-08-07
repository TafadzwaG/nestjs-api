/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';

@Controller('employee')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}


  @Post()
  createEmployee(@Body() employeeDto:EmployeeDto): Promise<Employee> {
      return this.employeesService.createEmployee(employeeDto)
  }
}
