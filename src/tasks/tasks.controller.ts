/* eslint-disable prettier/prettier */
import { TaskDto } from './dto/create-task.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { FilterTaskDto } from './dto/create-filter-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
// import { EmployeesService } from './../employees/employees.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
    // private employeesService: EmployeesService,
  ) {}

  @Get()
  async getTasks(filterTaskDto: FilterTaskDto): Promise<Task[]> {
    return await this.tasksService.getTasks(filterTaskDto);
  }

  @Get('/:id')
  async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return await this.tasksService.getTaskById(id);
  }

  @Post('/create')
  async createTask(@Body() taskDto: TaskDto): Promise<Task> {
    return await this.tasksService.createTask(taskDto);
  }
}
