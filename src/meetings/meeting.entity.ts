/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "../employees/employee.entity";


@Entity()
export class Meeting extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    

    @Column()
    zoomUrl: string;

    @ManyToMany(()=> Employee, employee => employee.meetings)
    attendees: Employee[]

    
}