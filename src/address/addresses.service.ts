/* eslint-disable prettier/prettier */
import { AddressRepository } from './address.repository';
import { CreateAddressDto } from './dto/create-address.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './addresses.entity';
import { ContactInfo } from 'src/contactInfo/contact-info.entity';
import { ContactInfoRepository } from 'src/contactInfo/contact-info.repository';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(AddressRepository)
    private addressRepository: AddressRepository,
    private contactInfoRepository: ContactInfoRepository,
  ) {}

  async createAddress(
    createAddressDto: CreateAddressDto,
    contactInfo: ContactInfo,
  ): Promise<Address> {
    const newAddress = await this.addressRepository.save({
      address: createAddressDto.address,
      street : createAddressDto.street,
      city: createAddressDto.city,
      zip_code: createAddressDto.zip_code
    });

    contactInfo.address = newAddress;
    await contactInfo.save();

    return newAddress;
  }
}
