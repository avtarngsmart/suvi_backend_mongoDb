import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParameterSettingsService } from './parameter_settings.service';
import { CreateParameterSettingDto } from './dto/create-parameter_setting.dto';
import { UpdateParameterSettingDto } from './dto/update-parameter_setting.dto';

@Controller('parameter-settings')
export class ParameterSettingsController {
  constructor(private readonly parameterSettingsService: ParameterSettingsService) {}

  @Post()
  create(@Body() createParameterSettingDto: CreateParameterSettingDto) {
    return this.parameterSettingsService.create(createParameterSettingDto);
  }

  @Get()
  findAll() {
    return this.parameterSettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parameterSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParameterSettingDto: UpdateParameterSettingDto) {
    return this.parameterSettingsService.update(+id, updateParameterSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parameterSettingsService.remove(+id);
  }
}
