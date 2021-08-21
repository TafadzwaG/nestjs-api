/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeDto } from './dto/create-employee.dto';
import { Employee } from './employee.entity';
import { Meeting } from 'src/meetings/meeting.entity';
import { EmployeeFilterDto } from './dto/create-employee-filter.dto';

@Controller('employee')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  async getEmployees(
    @Query(ValidationPipe) employeeFilterDto: EmployeeFilterDto,
  ): Promise<Employee[]> {
    return await this.employeesService.getEmployees(employeeFilterDto);
  }

  @Get('/:id')
  async getEmployeeById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Employee> {
    return await this.employeesService.getEmployeeById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createEmployee(
    @Body() employeeDto: EmployeeDto,
    meeting: Meeting,
  ): Promise<Employee> {
    return await this.employeesService.createEmployee(employeeDto, meeting);
  }

  @Patch('/:id/update')
  // @UsePipes(ValidationPipe)
  async updateEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Body() employeeDto: EmployeeDto,
  ): Promise<Employee> {
    console.log(id);
    return await this.employeesService.updateEmployee(id, employeeDto);
  }
}
