import { Module } from '@nestjs/common';
import { UserResolvers } from './users.resolvers';
import { UserService } from './users.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [UserService],
  providers: [UserResolvers, UserService, PrismaService],
})
export class UserModule {}
