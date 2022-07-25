import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginUser, UserToken } from 'src/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => UserToken)
  async loginUser(@Args('input') args: LoginUser) {
    return this.authService.validateUser(args.username, args.password);
  }
}
