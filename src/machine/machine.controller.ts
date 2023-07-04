import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res,Patch } from '@nestjs/common';
import { CreateMachineDto } from './dto/create-machine.dto';
import { MachineService } from './machine.service';
import { UpdateMachineDto } from './dto/update-machine.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger/dist';

@Controller('machine')
@ApiTags("Machine")
export class MachineController {
   constructor(private readonly machineService: MachineService) { }

   @Post()
   @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
   @ApiResponse({ status: 400, description: 'Bad Request' })
   async createMachine(@Res() response, @Body() createMachineDto: CreateMachineDto) {
    try {
      const newMachine = await this.machineService.createMachine(createMachineDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Machine has been created successfully',
        newMachine});
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Machine not created!',
        error: 'Bad Request'
      });
    }
  }

  // @Put('/:id')
  @Patch('/:id')
  @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  // async updateMachine(@Res() response, @Param('id') machineId: string, @Body() updateMachineDto: UpdateMachineDto) {
  async updateMachine(@Res() response,@Param('id') _id:any, @Body() updateMachineDto: UpdateMachineDto) {
try {
      const existingMachine = await this.machineService.updateMachine(_id,updateMachineDto);
      return response.status(HttpStatus.OK).json({
        message: 'Machine has been successfully updated',
        existingMachine});
    }
    catch (err){
      return response.status(err.status).json(err.response);
    }
  }

  @Get()
  @ApiResponse({ status: 200, description: 'The records have been successfully fetched.'})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async getMachines(@Res() response) {
    try {
      const machineData = await this.machineService.getAllMachines();
      return response.status(HttpStatus.OK).json({
        message: 'All machines data found successfully',machineData});
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  
  // @Get('/:id')
  // @ApiResponse({ status: 200, description: 'The record has been successfully fetched.'})
  // @ApiResponse({ status: 400, description: 'Bad Request' })
  // async getMachine(@Res() response, @Param('id') machineId: string) {
  //   try {
  //     const existingMachine = await
  //     this.machineService.getMachine(machineId);
  //     return response.status(HttpStatus.OK).json({
  //       message: 'Machine found successfully',existingMachine,});
  //   } catch (err) {
  //     return response.status(err.status).json(err.response);
  //   }
  // }
}