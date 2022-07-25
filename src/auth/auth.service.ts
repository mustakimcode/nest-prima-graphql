import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { AuthenticationError } from 'apollo-server-express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return {
          token: this.jwtService.sign({
            username: user.username,
            sub: user.id,
          }),
        };
      } else {
        throw new AuthenticationError('User not authenticated');
      }
    }
  }
}
