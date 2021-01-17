import { AuthService } from './auth.service';
import { AuthCredentials } from './dto/auth-credentials.dto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/users')
  signUp(@Body() authCredentials: AuthCredentials) {
    return this.authService.signUp(authCredentials);
  }
}
