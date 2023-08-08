import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginDto} from './dto/login.dto';
import {SignUpDto} from './dto/signup.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService){}
@Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
      return this.authService.signUp(signUpDto);
  }
  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<{ token: string }> {

    return this.authService.login(loginDto);
  }
  
}
