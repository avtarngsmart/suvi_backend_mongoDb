import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { machine } from 'os';

@Controller('recipe')
@ApiTags('Recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  // @Post()
  // create(@Body() createRecipeDto: CreateRecipeDto) {
  //   return this.recipeService.create(createRecipeDto);
  // }

  @Get()
 
    @ApiResponse({ status: 200, description: 'The records have been successfully fetched.'})
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async getRecipeData(@Res() response) {
      try {
        const recipeData = await this.recipeService.getAllRecipeData();
        return response.status(HttpStatus.OK).json({
          message: 'All machines data found successfully',recipeData});
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
  }

  // @Get(':id')
  // findOne(@Param('id') id: number) {
  //   return this.recipeService.findOne(+id);
  // }

  @Get(':id')
  findOne(@Param('id') machineId: number) {
    return this.recipeService.findOne(+machineId);
  }

  @Patch('/:id')
  @ApiResponse({ status: 201, description: 'The record has been successfully updated.'})
  @ApiResponse({ status: 400, description: 'Bad Request' })
  // async updateMachine(@Res() response, @Param('id') machineId: string, @Body() updateMachineDto: UpdateMachineDto) {
  async updateMachine(@Param('id') _id:any, @Body() updateRecipeDto: UpdateRecipeDto) {
  const RecipeControllers= await this.recipeService.update(_id,updateRecipeDto);
  return RecipeControllers

// try {
//      return await this.recipeService.update(id,updateRecipeDto);
//       return response.status(HttpStatus.OK).json({
//         message: 'Machine has been successfully updated',
//         });
//     }
//     catch (err){
//       return response.status(err.status).json(err.response);
//     }
  }
  // update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    
    
  //   return this.recipeService.update(+id, updateRecipeDto);


  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.recipeService.remove(+id);
  // }
}
