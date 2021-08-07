/* eslint-disable prettier/prettier */
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
  ) {}


  async getTasks(filterTaskDto :FilterTaskDto): Promise<Task[]> {
    return await this.taskRepository.getTasks(filterTaskDto);
  }


  async createTask(taskDto: TaskDto): Promise<Task> {
    return await this.taskRepository.createTask(taskDto);
  }

  async getTaskById(id: number): Promise<Task> {
    try {
      const singleTask = await this.taskRepository.findOneOrFail(id);
      return singleTask;
    } catch (error) {
      throw new Error(error);
      console.log(`Task with ID "${id}" could not be found`)
    }
  }
}
