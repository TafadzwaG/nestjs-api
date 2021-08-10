/* eslint-disable prettier/prettier */

import { IsNotEmpty, IsOptional } from "class-validator";


export class EmployeeFilterDto {
    
    @IsNotEmpty()
    @IsOptional()
    search: string;
}