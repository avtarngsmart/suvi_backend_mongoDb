import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOutputParamDto } from './dto/create-output_param.dto';
import { UpdateOutputParamDto } from './dto/update-output_param.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Output_params } from './schema/output_params.schema';
// import { ObjectID } from 'mongodb';
// import { Parameter } from '../parameters/schemas/parameters.schema';
import {ParametersService} from '../parameters/parameters.service';
@Injectable()
export class OutputParamsService {
  constructor(
     @InjectModel(Output_params.name) private outputModel:Model<Output_params>,
     private parameterServices:ParametersService
    //  @InjectModel(Parameter.name) private parameterModel:Model<Parameter>
   ){}
  async create(createOutputParamDto: CreateOutputParamDto) {
    const lastUser = await this.outputModel.findOne().sort({ id: -1 }).exec();
    const nextId = lastUser ? lastUser.id + 1 : 1;
    
    const outputData=await  this.outputModel.create({id:nextId,...createOutputParamDto})
    if(Object.keys(outputData).length==0){
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    else{
      return outputData.save()
    }
    // return outputData.save()
  }

async findAll() {
    const paramValues=await this.parameterServices.findFval();
const data=await this.outputModel.aggregate([
  {
    $lookup: {
      from: "parametersettings",
      localField:"paramName",
      foreignField:"param",
      as: "param",
    }
  },
])
data[0].param=data[0].param[0].id
const combinedData =await data.reduce((result, obj1) => {
      const matchingObj2 = paramValues.find((obj2) => obj2._id === obj1.param);
      if (matchingObj2) {
        result.push({ ...obj1, ...matchingObj2 });
      }
      return result;
    }, []);
return combinedData
}

async  findOne(id: number) {
  return await this.outputModel.findOne({id})  
}
async  update(id: number, updateOutputParamDto: UpdateOutputParamDto) {
    const outputId=this.findOne(id)
    const ids=(await outputId)._id
    return await this.outputModel.findByIdAndUpdate(ids,updateOutputParamDto,{ new: true })
    }

 async remove(id: number) {
    const outputId=this.findOne(id)
    const _id=(await outputId)._id
    return await this.outputModel.deleteOne(_id)
   }
}
