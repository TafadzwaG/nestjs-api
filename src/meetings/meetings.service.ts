/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { MeetingsRepository } from './meeting.repository';
import { EmployeeRepository } from 'src/employees/employee.repository';
import { MeetingDto } from './dto/create-meeting.dto';
import { Meeting } from './meeting.entity';
import { Employee } from './../employees/employee.entity';
import { connection } from 'mongoose';
import { EmployeesService } from 'src/employees/employees.service';


@Injectable()
export class MeetingsService {
  constructor(
    private meetingsRepository: MeetingsRepository,
    private employeeRepository: EmployeeRepository,
    private employeesService: EmployeesService,
  ) {}


  async createMeeting(meetingDto: MeetingDto, employee: Employee): Promise<Meeting> {
      const newMeeting = await this.meetingsRepository.save({
          title : meetingDto.title,
          zoomUrl : meetingDto.zoomUrl 
      })

      employee.meetings = [...employee.meetings, newMeeting]
      await employee.save()

      return newMeeting;

    


  }
}
