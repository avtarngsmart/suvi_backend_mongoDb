import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateDatumArrayDto, CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('data')
@ApiTags('Data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createDatumDto: CreateDatumArrayDto) {
    return this.dataService.create(createDatumDto);
  }

  // @Get()
  // findAll() {
  //   return this.dataService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.dataService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateDatumDto: UpdateDatumDto) {
  //   return this.dataService.update(+id, updateDatumDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.dataService.remove(+id);
  // }
}
