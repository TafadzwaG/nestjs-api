/* eslint-disable prettier/prettier */

import { Meeting } from './meeting.entity';
import { EntityRepository, Repository } from 'typeorm';


@EntityRepository(Meeting)
export class MeetingsRepository extends Repository<Meeting> {}