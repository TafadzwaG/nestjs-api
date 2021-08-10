/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { ContactInfo } from './contact-info.entity';

@EntityRepository(ContactInfo)
export class ContactInfoRepository extends Repository<ContactInfo> {}
