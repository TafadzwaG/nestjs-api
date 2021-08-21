/* eslint-disable prettier/prettier */
import { EmployeeFilterDto } from './dto/create-employee-filter.dto';
import { Injectable } from '@nestjs/common';
import { MeetingsService } from 'src/meetings/meetings.service';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { Employee } from './employee.entity';
import { Meeting } from 'src/meetings/meeting.entity';
import { EmployeeDto } from './dto/create-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(EmployeeRepository)
    private employeeRepository: EmployeeRepository,
    private meetingsService : MeetingsService,
  ) {}

  async createEmployee(employeeDto: EmployeeDto, meeting: Meeting ): Promise<Employee> {
    const { name, biography, managerId, age } = employeeDto;

    const employee = new Employee();
    employee.name = name;
    employee.biography = biography;
    employee.age = age;

    const meetingsTobeAttended: Meeting[] = [];

    for(const meeting of employeeDto.meetings){
      const meet: Meeting = await this.meetingsService.getMeetingById(meeting);
      meetingsTobeAttended.push(meet);
    }

    await employee.save();

    return employee;
  }

  async getEmployees(
    employeeFilterDto: EmployeeFilterDto,
  ): Promise<Employee[]> {
    return await this.employeeRepository.getEmployees(employeeFilterDto);
  }

  async getEmployeeById(id: number): Promise<Employee> {
    try {
      const singleEmployee = await this.employeeRepository.findOneOrFail(id, {
        relations: ['contactInfo', 'contactInfo.address', 'tasks', 'meetings'],
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
