import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { NewUser, UpdateUser, SearchUser, User } from 'src/graphql';
import { ValidationError } from 'apollo-server-express';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService, // private authService: AuthService,
  ) {}

  async findOne(username: string): Promise<any> {
    const user = this.prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (!user) {
      return null;
    }
    return user;
  }

  // Get a single user
  async users(filter?: SearchUser): Promise<User[] | any> {
    return filter
      ? this.prisma.user.findMany({
          where: {
            username: {
              contains: filter.username,
            },
            address: {
              contains: filter.address,
            },
            phone_number: {
              contains: filter.phone_number,
            },
          },
        })
      : this.prisma.user.findMany({});
  }

  // Create a user
  async createUser(input: NewUser): Promise<any> {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    input.password = hashedPassword;
    return this.prisma.user.create({
      data: input,
    });
  }

  // Update a user
  async updateUser(params: UpdateUser): Promise<any> {
    const { id, username, name, address, phone_number, password } = params;
    const userExists = await this.prisma.user.count({
      where: {
        id: parseInt(id),
      },
    });

    if (userExists == 0) {
      throw new ValidationError("User Doesn't esixt!!");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      return await this.prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: {
          ...(username && { username }),
          ...(name && { name }),
          ...(address && { address }),
          ...(phone_number && { phone_number }),
          ...(password && { password: hashedPassword }),
        },
      });
    }
  }

  // delete a user
  async deleteUser(id: string): Promise<User | any> {
    const userExists = await this.prisma.user.count({
      where: {
        id: parseInt(id),
      },
    });

    if (userExists == 0) {
      throw new ValidationError("User Doesn't esixt!!");
    } else {
      return this.prisma.user.delete({
        where: {
          id: parseInt(id),
        },
      });
    }
  }
}
