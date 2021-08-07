/* eslint-disable prettier/prettier */
import { Column, Entity,BaseEntity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from '../employees/employee.entity';


@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    description: string;

    @Column()
    task_image: string;


    @ManyToOne(() => Employee, employee => employee.tasks, {onDelete: 'SET NULL'})
    employee: Employee;


}