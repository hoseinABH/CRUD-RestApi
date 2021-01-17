import { AuthCredentials } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) {}

  async signUp(authCredentials: AuthCredentials): Promise<void> {
    return this.userRepository.signup(authCredentials);
  }
}