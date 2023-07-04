import { Injectable } from '@nestjs/common';
import { CreateDashParamDto } from './dto/create-dash_param.dto';
import { UpdateDashParamDto } from './dto/update-dash_param.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Dash_Param} from './schema/dash_param.schema';
import {Recipe} from '../recipe/schemas/recipe.schema';

@Injectable()
export class DashParamService {
  constructor(@InjectModel(Dash_Param.name) private dashParamModel:Model<Dash_Param>,
  @InjectModel(Recipe.name) private recipeModel:Model<Recipe> ){}
  async create(createDashParamDto: CreateDashParamDto) {
    const lastUser = await this.dashParamModel.findOne().sort({ id: -1 }).exec();
    const nextId = lastUser ? lastUser.id + 1 : 1;
    const creatDashParam= await this.dashParamModel.create({id:nextId,...createDashParamDto})
    return await creatDashParam.save();
  }
async findAllDashParams() {
    return await this.dashParamModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} dashParam`;
  }

  update(id: number, updateDashParamDto: UpdateDashParamDto) {
    return `This action updates a #${id} dashParam`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashParam`;
  }


async GetDashParamByDashId() {
  const data= await this.dashParamModel.aggregate([
   {
      $lookup: {
        from: "recipes", // Name of the orders collection
        localField:"recipeId",
        foreignField:"id",
        as: "recipeName",
      }
    },
    {
      $lookup:{
        from:'parametersettings',
        localField:"paramId",
        foreignField:"id",
        as: "paramName",
      }
    },
  ]);
data[0].recipeName=data[0].recipeName[0].recipeName
data[0].paramName=data[0].paramName[0].param
    return data
    }
async GetDashParamByDashIds(payload:any){
    const dashIds = payload.dashIds;
const payloadData= await this.dashParamModel.find({dashId:dashIds}).exec();
const datas=await this.dashParamModel.aggregate([
        {
          $lookup: {
            from: "recipes", // Name of the orders collection
            localField:"recipeId",
            foreignField:"id",
            as: "recipeName",
          }
        },
        
        {
          $lookup:{
            from:'parametersettings',
            localField:"paramId",
            foreignField:"id",
            as: "paramName",
          }
        },
        {
        $lookup:{
        from:'parameters',
        localField:'paramId',
        foreignField:'parameterSettingId',
        as:"value"
      }
      }
      ]);
      for(const i in datas){
       datas[i].recipeName=datas[i].recipeName[0].recipeName
        datas[i].paramName=datas[i].paramName[0].param
        datas[i].value=datas[i].value[0].value
      }
    const matchedData = datas.filter(obj1 =>payloadData.some(obj2 => obj2.recipeId === obj1.recipeId));
    
    return matchedData
    }


}




