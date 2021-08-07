/* eslint-disable prettier/prettier */
import { ContactDto } from './dto/create-contactInfo.dto';
import { Controller, Post } from '@nestjs/common';
import { ContactInfoService } from './contact-info.service';
import { ContactInfo } from 'src/contactInfo/contact-info.entity';

@Controller('contact_info')
export class ContactInfoController {
  constructor(private contactInfoService: ContactInfoService) {}

  @Post()
  async createContactInfo(
    contactInfoDto: ContactDto,
  ): Promise<ContactInfo> {
    return this.contactInfoService.createContactInfo(contactInfoDto);
  }
}
