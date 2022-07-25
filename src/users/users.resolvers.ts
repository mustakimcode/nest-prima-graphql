import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { UserService } from './users.service';
import { NewUser, UpdateUser, SearchUser } from 'src/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlAuthGuard } from 'src/auth/gql-auth.guard';

@Resolver('User')
export class UserResolvers {
  constructor(private readonly userService: UserService) {}

  @Query('users')
  @UseGuards(GqlAuthGuard)
  async user(@Args('filter') args: SearchUser) {
    return this.userService.users(args);
  }

  @Mutation('createUser')
  async create(@Args('input') args: NewUser) {
    return this.userService.createUser(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation('updateUser')
  async update(@Args('input') args: UpdateUser) {
    return this.userService.updateUser(args);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation('deleteUser')
  async delete(@Args('id') args: string) {
    return this.userService.deleteUser(args);
  }
}
