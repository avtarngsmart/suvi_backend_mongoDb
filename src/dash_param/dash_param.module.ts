import { Module } from '@nestjs/common';
import { DashParamService } from './dash_param.service';
import { DashParamController } from './dash_param.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Dash_Param, Dash_ParamSchema} from './schema/dash_param.schema';
import {Recipe, RecipeSchema} from '../recipe/schemas/recipe.schema';
import { Parameter, ParametersSchema } from 'src/parameters/schemas/parameters.schema';
// import { Parameter, ParametersSchema } from 'src/parameters/schemas/parameters.schema';
@Module({
  imports:[MongooseModule.forFeature([{name:Dash_Param.name,schema:Dash_ParamSchema},
    {name:Recipe.name,schema:RecipeSchema},
    {name:Parameter.name,schema:ParametersSchema}
    
  ])],
  controllers: [DashParamController],
  providers: [DashParamService]
})
export class DashParamModule {}
