/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { MeetingsRepository } from './meeting.repository';
import { EmployeeRepository } from 'src/employees/employee.repository';
import { MeetingDto } from './dto/create-meeting.dto';
import { Meeting } from './meeting.entity';
import { Employee } from './../employees/employee.entity';
import { EmployeesService } from 'src/employees/employees.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MeetingsService {
  constructor(
    @InjectRepository(MeetingsRepository)
    private meetingsRepository: MeetingsRepository,
    private employeesService: EmployeesService,
  ) {}

  async createMeeting(
    meetingDto: MeetingDto,
    employee: Employee,
  ): Promise<Meeting> {
    const newMeeting = new Meeting();
    (newMeeting.title = meetingDto.title),
      (newMeeting.zoomUrl = meetingDto.zoomUrl);

    const meetingAttendees: Employee[] = [];

    for (const employee of meetingDto.attendees) {
      const emp: Employee = await this.employeesService.getEmployeeById(
        employee,
      );
      meetingAttendees.push(emp);
    }
    newMeeting.attendees = meetingAttendees;
    await newMeeting.save();

    return newMeeting;
  }

  async getMeetingById(id: number): Promise<Meeting> {
    try {
      const meeting = await this.meetingsRepository.findOneOrFail(id, {
        relations: ['attendees'],
      });
      return meeting;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
