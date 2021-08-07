/* eslint-disable prettier/prettier */
import { TaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { EntityRepository, Repository } from 'typeorm';
import { FilterTaskDto } from './dto/create-filter-task.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask(taskDto: TaskDto): Promise<Task> {
    const { name, task_image, description, employeeId } = taskDto;

    
    const task = new Task();
    task.name = name;
    task.task_image = task_image;
    task.description = description;

    await task.save();

    return task;
  }

  async getTasks(filterTaskDto: FilterTaskDto): Promise<Task[]> {
    const { search } = filterTaskDto;

    const query = this.createQueryBuilder('task');

    if (search) {
      query.andWhere(
        '(task.name LIKE :search OR task.description LIKE :search)',
        { search: `%${search}%` },
      );
    }

    const tasks = await query.getMany();
    return tasks;
  }
}
