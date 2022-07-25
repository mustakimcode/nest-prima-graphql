import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './users.service';
import { NewUser, UpdateUser, SearchUser } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  // @UseGuards(JwtAuthGuard)
  async user(@Args('filter') args: SearchUser) {
    console.log(args);
    return this.userService.users(args);
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser) {
    return this.userService.createUser(args);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation('updateUser')
  async update(@Args('input') args: UpdateUser) {
    return this.userService.updateUser(args);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation('deleteUser')
  async delete(@Args('id') args: string) {
    return this.userService.deleteUser(args);
  }
}
