/* eslint-disable prettier/prettier */
import { AddressesService } from './addresses.service';
import { Controller } from '@nestjs/common';

@Controller()
export class AddressesController {
    constructor( private addressesService: AddressesService){}
}
