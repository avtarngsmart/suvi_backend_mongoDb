import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { RecipeModule } from 'src/recipe/recipe.module';
import { ParametersModule } from 'src/parameters/parameters.module';
import { ParameterSettingsModule } from 'src/parameter_settings/parameter_settings.module';
import { MachineModule } from 'src/machine/machine.module';

@Module({
  imports:[ RecipeModule, ParametersModule, ParameterSettingsModule, MachineModule],
  controllers: [DataController],   
  providers: [DataService]
})
export class DataModule {}
