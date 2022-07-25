import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { BasicStrategy } from './auth-basic.strategy';
import { ConfigModule } from '@nestjs/config';
import { AuthResolver } from './auth.resolver';
import { GqlAuthGuard } from './gql-auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'process';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      signOptions: {
        expiresIn: '60m',
      },
      secret: env.JWT_SECRET,
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    BasicStrategy,
    // GqlAuthGuard,
    AuthResolver,
    JwtStrategy,
  ],
})
export class AuthModule {}
