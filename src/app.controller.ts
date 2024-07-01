import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getRoot(): string {
    return 'Welcome to my NestJS app!';
  }
}
