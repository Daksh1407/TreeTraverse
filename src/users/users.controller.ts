import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  getUsers(): string {
    return 'This endpoint returns a list of users.';
  }
}
