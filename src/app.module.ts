import { AddressesModule } from './address/addresses.module';
/* eslint-disable prettier/prettier */

import { TasksModule } from './tasks/tasks.module';
import { MeetingModule } from './meetings/meeting.module';
import { EmployeeModule } from './employees/employee.module';
import { ContactInfoModule } from './contactInfo/contact-info.module';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
// import { DefaultAdminModule } from 'nestjs-admin'

@Module({
  imports: [
    // DefaultAdminModule,
    AddressesModule,
    TasksModule,
    MeetingModule,
    EmployeeModule,
    ContactInfoModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
