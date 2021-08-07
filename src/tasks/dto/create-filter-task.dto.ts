/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional } from 'class-validator';

export  class FilterTaskDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}
