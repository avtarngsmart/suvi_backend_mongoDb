import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DashParamService } from './dash_param.service';
import { CreateDashParamDto } from './dto/create-dash_param.dto';
import { UpdateDashParamDto } from './dto/update-dash_param.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('dash-param')
export class DashParamController {
  constructor(private readonly dashParamService: DashParamService) {}
  @Post()
  create(@Body() createDashParamDto: CreateDashParamDto) {
    return this.dashParamService.create(createDashParamDto);
  }

  // @Get()
  // findAll() {
  //   return this.dashParamService.findAllDashParams();
  // }



 
 
  @Get('/show-parameter')
  @ApiResponse({ status: 201, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
   async GetDashParamByMultipleDash(){
    return await this.dashParamService.GetDashParamByDashId();
  }

  @Post('/multi')
  
  @ApiResponse({ status: 201, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
 
   GetDashParamByMultipleDashIds(@Body() payload: any ) {
    return this.dashParamService.GetDashParamByDashIds(payload);
  }
}
