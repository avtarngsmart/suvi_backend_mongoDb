// import { Injectable } from '@nestjs/common';
// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';

// @Injectable()
// export class AuthService {
//   create(createAuthDto: CreateAuthDto) {
//     return 'This action adds a new auth';
//   }

//   findAll() {
//     return `This action returns all auth`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }

//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }


// import { Injectable } from '@nestjs/common';
// import { CreateAuthDto } from './dto/login.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
// import { Model } from 'mongoose';
// import {InjectModel} from '@nestjs/mongoose';
// import {Auth} from './schema/auth.schema';
// @Injectable()
// export class AuthService {
//   constructor(@InjectModel(Auth.name) private authModel:Model<Auth>){}
//   create(createAuthDto: CreateAuthDto) {
//     const newData=new this.authModel(createAuthDto)
//     return newData.save()

//     // return 'This action adds a new auth';

//   }

//   findAll() {
//     // return `This action returns all auth`;
//     return this.authModel.find();
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} auth`;
//   }

//   update(id: number, updateAuthDto: UpdateAuthDto) {
//     return `This action updates a #${id} auth`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} auth`;
//   }
// }



import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './schema/auth.schema';

import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name)
    private userModel: Model<Auth>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { name, email, password } = signUpDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = this.jwtService.sign({ id: user._id });

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

    const token = this.jwtService.sign({ id: user._id });

    return { token };
  }
}

