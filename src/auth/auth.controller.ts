import { AuthService } from './auth.service';
import { AuthCredentials } from './dto/auth-credentials.dto';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentials: AuthCredentials) {
    return this.authService.signUp(authCredentials);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCredentials: AuthCredentials) {
    return this.authService.singIn(authCredentials);
  }
}
