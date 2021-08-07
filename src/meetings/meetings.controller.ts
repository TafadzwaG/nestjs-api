/* eslint-disable prettier/prettier */

import { Controller } from '@nestjs/common';
import { MeetingsService } from './meetings.service';

@Controller()
export class MeetingsController {
  constructor(private meetingsService: MeetingsService) {}
}
