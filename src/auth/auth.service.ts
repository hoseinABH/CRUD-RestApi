import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';
import { Jwtpayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(authCredentials: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signup(authCredentials);
  }

  async singIn(authCredentials: AuthCredentialsDto): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUserPassword(authCredentials);

    if (!username) {
      throw new UnauthorizedException('Invalid credentials.');
    }
    const payload: Jwtpayload = { username };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
