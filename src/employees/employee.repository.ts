/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { EmployeeDto } from './dto/create-employee.dto';
import { EmployeeFilterDto } from './dto/create-employee-filter.dto';
import { ContactInfo } from './../contactInfo/contact-info.entity';


@EntityRepository(Employee)
export class EmployeeRepository extends Repository<Employee> {
  async createEmployee(employeeDto: EmployeeDto): Promise<Employee> {
    const { name, biography, managerId , age } = employeeDto;

    const employee = new Employee();
    employee.name = name;
    employee.biography = biography;
    employee.age = age;
    await employee.save();

    return employee;
  }

  async getEmployees(
    employeeFilterDto: EmployeeFilterDto,
  ): Promise<Employee[]> {
    const { search } = employeeFilterDto;

    const query = this.createQueryBuilder('employee')
                .leftJoinAndSelect("employee.directReports", "directReports")
                .leftJoinAndSelect("employee.tasks", "tasks")
                .leftJoinAndSelect("employee.contactInfo","contactInfo")
                .leftJoinAndSelect("contactInfo.address", "address")
                

    try {
      if (search) {
        query.andWhere(
          '(employee.name LIKE :search OR employee.bio LIKE : search)',
          {
            search: `%${search}%`,
          },
        );
      }

      const employees = await query.getMany();
      

      return employees;
    } catch (error) {
      throw new Error(error);
    }
  }

  
}
