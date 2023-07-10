
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Auth,authSchema} from './schema/auth.schema';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import {Recipe, RecipeSchema} from '../recipe/schemas/recipe.schema';
import { RecipeService } from 'src/recipe/recipe.service';
@Module({
  imports:[  
    MongooseModule.forFeature([{name:Auth.name,schema:authSchema},{name:Recipe.name,schema:RecipeSchema}]),
 PassportModule.register({ defaultStrategy: 'jwt' }),
   JwtModule.registerAsync({
     inject: [ConfigService],
     useFactory: (config: ConfigService) => {
       return {
         secret: config.get<string>('JWT_SECRET'),
         signOptions: {
           // expiresIn: config.get<string | number>('JWT_EXPIRES'),
           expiresIn: config.get('JWT_EXPIRES'),
         },
       };
     },
   }),
 ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,RecipeService],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
