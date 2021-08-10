/* eslint-disable prettier/prettier */
import { ContactInfo } from './contact-info.entity';
import { ContactDto } from './dto/create-contactInfo.dto';
import { ContactInfoRepository } from './contact-info.repository';
import { Injectable } from '@nestjs/common';
import { Employee } from './../employees/employee.entity';
import { EmployeeRepository } from './../employees/employee.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactInfoService {
  constructor(
    @InjectRepository(ContactInfoRepository)
    private contactInfoRepository: ContactInfoRepository,
    private employeeRepository: EmployeeRepository,
  ) {}

  async createContactInfo(contactInfoDto: ContactDto): Promise<ContactInfo> {
    const newContact = await this.contactInfoRepository.save({
      phone: contactInfoDto.phone,
      email: contactInfoDto.email,
      twitter: contactInfoDto.twitter,
      facebook: contactInfoDto.facebook,
      instagram: contactInfoDto.instagram,
      employeeId: contactInfoDto.employeeId,
    });


    return newContact;
  }

  async getContactInfoById(id: number): Promise<ContactInfo> {
    return await this.contactInfoRepository.findOneOrFail(id, {
      relations: ['address'],
    });
  }

  async updateContactInfo(
    id: number,
    contactInfoDto: ContactDto,
  ): Promise<ContactInfo> {
    const updatedContact = await this.getContactInfoById(id);

    (updatedContact.phone = contactInfoDto.phone),
      (updatedContact.email = contactInfoDto.email),
      (updatedContact.twitter = contactInfoDto.twitter),
      (updatedContact.facebook = contactInfoDto.facebook),
      (updatedContact.instagram = contactInfoDto.instagram),
      await updatedContact.save();

    return updatedContact;
  }
}
