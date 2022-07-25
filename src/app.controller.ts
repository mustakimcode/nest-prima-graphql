import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './users/users.service';
@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/users')
  @UseGuards(AuthGuard('basic'))
  getUsers(): any {
    return this.userService.users();
  }
}
