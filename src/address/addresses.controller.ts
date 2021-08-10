/* eslint-disable prettier/prettier */
import { AddressesService } from './addresses.service';
import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Address } from './addresses.entity';
import { CreateAddressDto } from './dto/create-address.dto';
import { ContactInfoService } from './../contactInfo/contact-info.service';

@Controller('address')
export class AddressesController {
  constructor(
    private addressesService: AddressesService,
    private contactInfoService: ContactInfoService,
  ) {}

  @Post()
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<Address> {
    const contact = await this.contactInfoService.getContactInfoById(
      createAddressDto.contactInfoId,
    );

    return await this.addressesService.createAddress(createAddressDto, contact);
  }
}
