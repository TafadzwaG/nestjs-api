/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { IsIn } from 'class-validator';
import { Employee } from './../../employees/employee.entity';

export class TaskDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  task_image: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  employeeId: number;
}
