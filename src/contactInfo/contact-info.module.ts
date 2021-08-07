/* eslint-disable prettier/prettier */
import { ContactInfoService } from './contact-info.service';
import { ContactInfoController } from './contact-info.controller';
import { ContactInfoRepository } from './contact-info.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ContactInfoRepository])],
  controllers: [ContactInfoController],
  providers: [ContactInfoService],
})
export class ContactInfoModule {}
