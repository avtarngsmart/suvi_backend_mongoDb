import { Injectable } from '@nestjs/common';
import { CreateDatumArrayDto, CreateDatumDto } from './dto/create-datum.dto';
import { UpdateDatumDto } from './dto/update-datum.dto';
import { RecipeService } from "src/recipe/recipe.service";
import { ParametersService } from "src/parameters/parameters.service";
import { ParameterSettingsService } from "src/parameter_settings/parameter_settings.service";
import { MachineService } from 'src/machine/machine.service';

@Injectable()
export class DataService {
  constructor(
    private machineService: MachineService,
    private recipeService: RecipeService,
    private parametersService: ParametersService,
    private parameterSettingsService: ParameterSettingsService
  ){}
  async create(createDatumDto: CreateDatumArrayDto) {
    for (let i in createDatumDto){
      const {machineToken, recipeName, param, timeStamp, type, value } = createDatumDto[i];
  
      let findMachine = await this.machineService.findByMachine(machineToken);
      let machineId;
      if (!findMachine){
        const createdMachine = await this.machineService.createMachine({machineToken})
        machineId = createdMachine.id;
      }else{
        machineId = findMachine.id
      }
    
      const findRecipe =  await this.recipeService.findByRecipe(recipeName);
      let recipeId;
      if(!findRecipe){
        const createdRecipe = await this.recipeService.create({machineId, recipeName});
        recipeId = createdRecipe.id;
      }else{
        recipeId = findRecipe.id;
      }
      

      const findParamerSettings = await this.parameterSettingsService.findByParameterSetting(param);
      let parameterSettingId;
      if(!findParamerSettings){
        const createdParameterSettings = await this.parameterSettingsService.create({machineId, param, type, timeStamp});
        parameterSettingId = createdParameterSettings.id;
      }
      else{
        parameterSettingId = findParamerSettings.id
      }

      let sVal, bVal, fVal;
      if (type == 'string'){
         sVal = value;
      }
      if (type == 'boolean'){
         bVal = value;
      }
      if (type == 'number'){
         fVal = value;
      }
      const createdParameters = await this.parametersService.create({machineId, recipeId, parameterSettingId, sVal, bVal, fVal, timeStamp})
    }
    return "Successfully created"
  }

  // findAll() {
  //   return `This action returns all data`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} datum`;
  // }

  // update(id: number, updateDatumDto: UpdateDatumDto) {
  //   return `This action updates a #${id} datum`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} datum`;
  // }
}
