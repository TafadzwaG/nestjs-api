/* eslint-disable prettier/prettier */
import { TaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { EntityRepository, Repository } from 'typeorm';
import { FilterTaskDto } from './dto/create-filter-task.dto';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
 

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
