import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { LoginUser } from 'src/graphql';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation('loginUser')
  async loginUser(@Args('input') args: LoginUser, @Context() context) {
    return this.authService.validateUser(args.username, args.password);
  }
}
