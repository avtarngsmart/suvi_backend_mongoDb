import { Controller, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';
import { CreateDatumArrayDto, CreateDatumDto } from './dto/create-datum.dto';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('data')
@ApiTags('Data')
export class DataController {
  constructor(private readonly dataService: DataService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createDatumDto: CreateDatumArrayDto) {
    return this.dataService.create(createDatumDto);
  }
}
