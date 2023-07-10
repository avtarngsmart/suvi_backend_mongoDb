import { Module } from '@nestjs/common';
import { ParametersService } from './parameters.service';
import { ParametersController } from './parameters.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Parameter, ParametersSchema } from './schemas/parameters.schema';
import { DashParamService } from 'src/dash_param/dash_param.service';
import { Dash_Param,Dash_ParamSchema} from 'src/dash_param/schema/dash_param.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Parameter.name, schema: ParametersSchema}])],
  controllers: [ParametersController],
  providers: [ParametersService],
  exports: [ParametersService]
})
export class ParametersModule {}
