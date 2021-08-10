/* eslint-disable prettier/prettier */
import { BaseEntity } from 'typeorm';

import { ContactInfo } from 'src/contactInfo/contact-info.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Address extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @Column()
    street: string;

    @Column()
    city: string;

    @Column()
    zip_code: string;

    @OneToOne(() => ContactInfo, contactInfo => contactInfo.address, {
        onDelete: 'SET NULL'
    })
    @JoinColumn()
    contactInfo: ContactInfo;

    
   
}