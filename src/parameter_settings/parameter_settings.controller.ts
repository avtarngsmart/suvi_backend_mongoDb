import { Controller, Get} from '@nestjs/common';
import { ParameterSettingsService } from './parameter_settings.service';
import { ApiTags } from '@nestjs/swagger';
@Controller('parameters-settings')
@ApiTags('Parameter-setting')
export class ParameterSettingsController {
  constructor(private readonly parameterSettingsService: ParameterSettingsService) {}

  // @Post()
  // create(@Body() createParameterSettingDto: CreateParameterSettingDto) {
  //   return this.parameterSettingsService.create(createParameterSettingDto);
  // }

  @Get()
  async findAll() {
    return await this.parameterSettingsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.parameterSettingsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateParameterSettingDto: UpdateParameterSettingDto) {
  //   return this.parameterSettingsService.update(+id, updateParameterSettingDto);
  // }

}
