/* eslint-disable prettier/prettier */
import { ContactDto } from './dto/create-contactInfo.dto';
import { Controller, Post, Body, Param, ValidationPipe, Patch } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { ContactInfo } from 'src/contactInfo/contact-info.entity';
import { Employee } from './../employees/employee.entity';
import { EmployeesService } from './../employees/employees.service';
import { ParseIntPipe } from '@nestjs/common';

@Controller('contact_info')
export class ContactInfoController {
  constructor(
    private contactInfoService: ContactInfoService,
    private employeesService: EmployeesService,
  ) {}

  @Post()
  async createContactInfo(
    @Body(ValidationPipe)
    contactInfoDto: ContactDto,
  ): Promise<ContactInfo> {
    
    return await this.contactInfoService.createContactInfo(contactInfoDto);
  }
  

  @Patch('/:id/update')
  
  async updateContactInfo(
    @Param('id', ParseIntPipe) id: number,
    @Body()  contactInfoDto: ContactDto,
  ): Promise<ContactInfo> {
    return await this.contactInfoService.updateContactInfo(id, contactInfoDto)
  }

}
