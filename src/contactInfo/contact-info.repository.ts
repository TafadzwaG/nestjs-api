/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { ContactInfo } from './contact-info.entity';
import { ContactDto } from './dto/create-contactInfo.dto';


@EntityRepository(ContactInfo)
export class ContactInfoRepository extends Repository<ContactInfo> {
  async createContactInfo(contactInfoDto: ContactDto): Promise<ContactInfo> {
      
    const { phone, email, employeeId } = contactInfoDto;
    

    const contact = new ContactInfo();
    contact.phone = phone;
    contact.email = email;
    contact.employeeId = employeeId;

    await contact.save();

    return contact;
  }
}
