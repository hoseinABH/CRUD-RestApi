import { TaskStatus } from './../task-status.enum';
import { BadRequestException, PipeTransform } from '@nestjs/common';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isValidStatus(value)) {
      throw new BadRequestException(`"${value}" is not a valid status!`);
    }

    return value;
  }

  private isValidStatus(status: any) {
    const idx = this.allowedStatuses.indexOf(status);

    return idx !== -1;
  }
}
