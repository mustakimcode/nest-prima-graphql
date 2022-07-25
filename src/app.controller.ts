import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './auth/local.auth.guard';
import { AppService } from './app.service';
import { UserService } from './users/users.service';
import { filter } from 'rxjs';
import { SearchUser } from './graphql';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }

  @UseGuards(AuthGuard('basic'))
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  @UseGuards(LocalAuthGuard)
  getUsers(): any {
    return this.userService.users();
  }
}
