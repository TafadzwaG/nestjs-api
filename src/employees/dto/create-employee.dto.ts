/* eslint-disable prettier/prettier */
import { Employee } from './../employee.entity';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export class EmployeeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  bio: string;

  @IsOptional()
  @IsIn([Employee])
  managerId: number;
}
