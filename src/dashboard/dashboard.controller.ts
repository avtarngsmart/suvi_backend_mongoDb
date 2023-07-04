import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('dashboard')
@ApiTags('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createDashboardDto: CreateDashboardDto) {
    return this.dashboardService.create(createDashboardDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findAll() {
    return this.dashboardService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  findOne(@Param('id') id:number) {
    return this.dashboardService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  update(@Param('id') id: string, @Body() updateDashboardDto: UpdateDashboardDto) {
    return this.dashboardService.update(+id, updateDashboardDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  remove(@Param('id') id: number) {
    return this.dashboardService.remove(+id);
  }
}
