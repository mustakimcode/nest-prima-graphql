import { BasicStrategy as Strategy } from 'passport-http';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class GqlAuthGuard extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    console.log(request);
    request.body = ctx.getArgs().loginUser;
    return request;
  }
}
