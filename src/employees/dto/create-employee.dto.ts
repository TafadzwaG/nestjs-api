/* eslint-disable prettier/prettier */
import { Employee } from './../employee.entity';
import { IsBoolean, IsIn, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { Meeting } from 'src/meetings/meeting.entity';

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

  @IsOptional()
  meetings: number[]
}
