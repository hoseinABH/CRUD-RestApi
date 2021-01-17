import { AuthCredentials } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) {}

  async signUp(authCredentials: AuthCredentials): Promise<void> {
    return this.userRepository.signup(authCredentials);
  }

  async singIn(authCredentials: AuthCredentials) {
    const username = await this.userRepository.validateUserPassword(authCredentials);

    if (!username) {
      throw new UnauthorizedException('Invalid credentials.');
    }
  }
}
