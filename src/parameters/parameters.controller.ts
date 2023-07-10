import { Controller, Get, Param, Delete } from '@nestjs/common';
import { ParametersService } from './parameters.service';
// import { CreateParameterDto } from './dto/create-parameter.dto';
// import { UpdateParameterDto } from './dto/update-parameter.dto';
// import { ApiResponse } from '@nestjs/swagger';

@Controller('parameters')
export class ParametersController {
  constructor(private readonly parametersService: ParametersService) {}

  // @Post()
  // create(@Body() createParameterDto: CreateParameterDto) {
  //   return this.parametersService.create(createParameterDto);
  // }

  @Get('/allParam')
  findAll() {
    return this.parametersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') recipeId: string) {
    return this.parametersService.findOne(+recipeId);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateParameterDto: UpdateParameterDto) {
  //   return this.parametersService.update(+id, updateParameterDto);
  // }



  @Get()
    async findfval(){
        return await this.parametersService.findFval();
     }

}
