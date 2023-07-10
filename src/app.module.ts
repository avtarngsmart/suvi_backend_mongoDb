import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachineModule } from './machine/machine.module';
import { MongooseModule } from '@nestjs/mongoose';

import { RecipeModule } from './recipe/recipe.module';
import { ParameterSettingsModule } from './parameter_settings/parameter_settings.module';
import { ParametersModule } from './parameters/parameters.module';
import { DataModule } from './data/data.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OutputParamsModule } from './output_params/output_params.module';
import { DashParamModule } from './dash_param/dash_param.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MachineModule, 
    MongooseModule.forRoot('mongodb://0.0.0.0:27017',{dbName:'suvi'}), RecipeModule, 
    ParameterSettingsModule, ParametersModule, DataModule, DashboardModule, OutputParamsModule, DashParamModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],

  
})
export class AppModule {}
