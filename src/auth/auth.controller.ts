import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginDto} from './dto/login.dto';
import {SignUpDto} from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}


  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
      return this.authService.signUp(signUpDto);
  }

  // @Get('/login')
  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {

    return this.authService.login(loginDto);
  }
  
}
