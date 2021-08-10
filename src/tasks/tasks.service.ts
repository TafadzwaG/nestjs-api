/* eslint-disable prettier/prettier */
import { EmployeeRepository } from './../employees/employee.repository';
import { Employee } from './../employees/employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { TaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { FilterTaskDto } from './dto/create-filter-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
    private employeeRepository: EmployeeRepository,
  ) {}

  async getTasks(filterTaskDto: FilterTaskDto): Promise<Task[]> {
    return await this.taskRepository.getTasks(filterTaskDto);
  }

  async createTask(taskDto: TaskDto, employee: Employee): Promise<Task> {
    const newTask = await this.taskRepository.save({
      name: taskDto.name,
      description: taskDto.description,
      task_image: taskDto.task_image,
    });

    employee.tasks = [...employee.tasks, newTask];

    await employee.save();

    return newTask;
  }

  async getTaskById(id: number): Promise<Task> {
    try {
      const singleTask = await this.taskRepository.findOneOrFail(id);
      return singleTask;
    } catch (error) {
      throw new Error(error);
      console.log(`Task with ID "${id}" could not be found`);
    }
  }
}
