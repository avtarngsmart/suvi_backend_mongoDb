import { Module } from '@nestjs/common';
import { OutputParamsService } from './output_params.service';
import { OutputParamsController } from './output_params.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {Output_params, Output_paramsSchema} from './schema/output_params.schema';
import {ParametersService} from '../parameters/parameters.service';
import {Parameter, ParametersSchema} from '../parameters/schemas/parameters.schema';
@Module({
  imports:[
    MongooseModule.forFeature([{name:Output_params.name,schema:Output_paramsSchema},{name:Parameter.name,schema:ParametersSchema}]),
    // MongooseModule.forFeature([{name:Parameter.name,schema:ParametersSchema}]),
  ],
  controllers: [OutputParamsController],
  providers: [OutputParamsService,ParametersService]
})
export class OutputParamsModule {}
