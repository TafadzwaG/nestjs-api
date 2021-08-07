/* eslint-disable prettier/prettier */
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
