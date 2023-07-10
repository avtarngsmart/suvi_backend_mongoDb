import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './schema/auth.schema';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { RecipeService } from 'src/recipe/recipe.service';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private userModel: Model<Auth>,
    private jwtService: JwtService,
    private recipeService:RecipeService
    
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;
// const machineData=this.userModel.aggregate([
//  {
//   $lookup:{
//     from: "parameters", 
//     localField:"",
//     foreignField:"id",
//     as: "recipeName"
//   }
//  }
// ]);
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });
   

    const token = this.jwtService.sign({ id: user._id,name:user.email}); 

    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token = this.jwtService.sign({ id: user._id,name:user.email});

    return { token };
  }
}

