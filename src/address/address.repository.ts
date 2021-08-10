/* eslint-disable prettier/prettier */
import { CreateAddressDto } from './dto/create-address.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Address } from './addresses.entity';
import { ContactInfo } from 'src/contactInfo/contact-info.entity';
import { ContactInfoRepository } from 'src/contactInfo/contact-info.repository';

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {}
