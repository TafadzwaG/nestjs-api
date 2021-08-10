/* eslint-disable prettier/prettier */
import { ContactInfo } from './../../contactInfo/contact-info.entity';
import { IsIn, IsNotEmpty } from "class-validator";


export class CreateAddressDto {

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    zip_code: string;

    @IsNotEmpty()
    contactInfoId: number
}