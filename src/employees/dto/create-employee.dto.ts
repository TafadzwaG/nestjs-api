/* eslint-disable prettier/prettier */
import { Employee } from './../employee.entity';
import { IsBoolean, IsIn, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class EmployeeDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  biography: string;

  @IsNumber()
  age: number;

  @IsBoolean()
  isConfirmed: boolean;

  @IsOptional()
  managerId: number;
}
