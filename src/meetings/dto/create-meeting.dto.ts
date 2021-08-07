/* eslint-disable prettier/prettier */

import { IsIn, IsNotEmpty } from 'class-validator';
import { Employee } from './../../employees/employee.entity';



export class MeetingDto{

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    zoomUrl: string;


    @IsNotEmpty()
    attendees: number[];
}


