import { Controller, Get, Post, Body, Patch, Param, Delete, Response, Res, HttpStatus } from '@nestjs/common';
import { OutputParamsService } from './output_params.service';
import { CreateOutputParamDto } from './dto/create-output_param.dto';
import { UpdateOutputParamDto } from './dto/update-output_param.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('output-parameter')
@ApiTags("Output_Parameters")
export class OutputParamsController {
  constructor(private readonly outputParamsService: OutputParamsService) {}

  @Post()
  async create(@Res() response,@Body() createOutputParamDto: CreateOutputParamDto) {
  try {
      const OutputParameter =await this.outputParamsService.create(createOutputParamDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Output-Parameter has been created successfully',
        OutputParameter});
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Output-Parameter not created!',
        error: 'Bad Request'
      });
    }
  }
@Get()
 async findAll() {
    return await this.outputParamsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.outputParamsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOutputParamDto: UpdateOutputParamDto) {
    return await this.outputParamsService.update(+id, updateOutputParamDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.outputParamsService.remove(+id);
  }
}
