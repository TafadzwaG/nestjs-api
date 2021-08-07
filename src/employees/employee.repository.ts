/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { EmployeeDto } from './dto/create-employee.dto';

@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
  async createEmployee(employeeDto: EmployeeDto): Promise<Employee> {
    const { name, bio, managerId } = employeeDto;

    const employee = new Employee();
    employee.name = name;
    employee.bio = bio;
    


    await employee.save();

    return employee;
  }
}
