/* eslint-disable prettier/prettier */
import { EmployeeFilterDto } from './dto/create-employee-filter.dto';
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
    return await this.employeeRepository.createEmployee(employeeDto);
  }

  async getEmployees(
    employeeFilterDto: EmployeeFilterDto,
  ): Promise<Employee[]> {
    return await this.employeeRepository.getEmployees(employeeFilterDto);
  }

  async getEmployeeById(id: number): Promise<Employee> {
    try {
      const singleEmployee = await this.employeeRepository.findOneOrFail(id, {
        relations: ['contactInfo', 'contactInfo.address', 'tasks'],
      });
      return singleEmployee;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateEmployee(
    id: number,
    employeeDto: EmployeeDto,
  ): Promise<Employee> {
    const updatedEmployee = await this.getEmployeeById(id);

    (updatedEmployee.name = employeeDto.name),
      (updatedEmployee.biography = employeeDto.biography),
      (updatedEmployee.age = employeeDto.age),
      await updatedEmployee.save();

    return updatedEmployee;
  }
}
