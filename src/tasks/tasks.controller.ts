/* eslint-disable prettier/prettier */
import { TaskDto } from './dto/create-task.dto';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FilterTaskDto } from './dto/create-filter-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { EmployeesService } from './../employees/employees.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
    private employeesService: EmployeesService,
  ) {}

  @Get()
  async getTasks(
    @Query(ValidationPipe) filterTaskDto: FilterTaskDto,
  ): Promise<Task[]> {
    return await this.tasksService.getTasks(filterTaskDto);
  }

  @Get('/:id')
  //Getting tasks By Id(The Id is provided as a parameter '/:id')
  async getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return await this.tasksService.getTaskById(id);
  }

  @Post('/create')
  async createTask(@Body() taskDto: TaskDto): Promise<Task> {
    //Getting the employeeById to inject the Id in Newly created task
    const employee = await this.employeesService.getEmployeeById(
      taskDto.employeeId,
    );

    return await this.tasksService.createTask(taskDto, employee);
  }
}
