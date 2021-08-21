/* eslint-disable prettier/prettier */
import { Body, ValidationPipe } from '@nestjs/common';
import { Employee } from './../employees/employee.entity';
import { Controller, Post, UsePipes } from '@nestjs/common';
import { MeetingDto } from './dto/create-meeting.dto';
import { MeetingsService } from './meetings.service';
import { EmployeesService } from 'src/employees/employees.service';
import { Meeting } from './meeting.entity';

@Controller('meetings')
export class MeetingsController {
  constructor(
    private meetingsService: MeetingsService,
    private employeesService: EmployeesService,
  ) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async createMeeting(@Body() meetingDto: MeetingDto, employee:Employee): Promise<Meeting> {
    return await this.meetingsService.createMeeting(meetingDto, employee);
  }
}
