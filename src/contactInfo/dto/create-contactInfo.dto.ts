/* eslint-disable prettier/prettier */
import { IsEmail, IsIn, IsNotEmpty } from 'class-validator';
import { Employee } from './../../employees/employee.entity';
import { IsOptional } from 'class-validator';


export class ContactDto {
  @IsNotEmpty()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;


  @IsOptional()
  
  twitter: string;

  @IsOptional()
  facebook: string;

  @IsOptional()
  instagram: string;


  @IsNotEmpty()
  @IsOptional()
  employeeId: number;
}
