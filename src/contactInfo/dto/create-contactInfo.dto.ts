/* eslint-disable prettier/prettier */
import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';
import { Employee } from './../../employees/employee.entity';

export class ContactDto {
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  employeeId: number;
}
