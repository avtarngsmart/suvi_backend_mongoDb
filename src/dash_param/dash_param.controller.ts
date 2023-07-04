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

  @Get()
  findAll() {
    return this.dashParamService.findAllDashParams();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dashParamService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDashParamDto: UpdateDashParamDto) {
    return this.dashParamService.update(+id, updateDashParamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashParamService.remove(+id);
  }
 
  @Get('/show-parameter')
  @ApiResponse({ status: 201, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  GetDashParamByMultipleDash(){
    return this.dashParamService.GetDashParamByDashId();
  }

  @Post('/multi')
  // @Get('/multi')
  @ApiResponse({ status: 201, description: 'Success' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  //  GetDashParamByMultipleDashIds(@Body() payload: any) {
  //  GetDashParamByMultipleDashIds(@Query('field') field: string, @Query('value') value: any) {
   GetDashParamByMultipleDashIds(@Body() payload: any ) {
    return this.dashParamService.GetDashParamByDashIds(payload);
  }
}
