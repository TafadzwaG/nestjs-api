/* eslint-disable prettier/prettier */
import { ContactInfo } from './contact-info.entity';
import { ContactDto } from './dto/create-contactInfo.dto';
import { ContactInfoRepository } from './contact-info.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactInfoService {
  constructor(
    @InjectRepository(ContactInfoRepository)
    private contactInfoRepository: ContactInfoRepository,
  ) {}

  async createContactInfo(
    contactInfoDto: ContactDto,
  ): Promise<ContactInfo> {
      return this.contactInfoRepository.createContactInfo(contactInfoDto)
  }
}
