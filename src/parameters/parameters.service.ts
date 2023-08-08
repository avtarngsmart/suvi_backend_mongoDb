import { Injectable } from '@nestjs/common';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Parameter } from './schemas/parameters.schema';
import { Model } from 'mongoose';
@Injectable()
export class ParametersService {
constructor(
  @InjectModel(Parameter.name) private parametersModel: Model<Parameter>,
 ) {}

  async create(createParameterDto: CreateParameterDto) {
    const lastUser = await this.parametersModel.findOne().sort({ id: -1 }).exec();
    const nextId = lastUser ? lastUser.id + 1 : 1;
    const newParameters = new this.parametersModel({ id: nextId, ...createParameterDto })
    return await newParameters.save();
  }

  async findAll() {
    return await this.parametersModel.find();

  }

  async findOne(recipeId: number) {
    const data = await this.parametersModel.aggregate([
      {
        $lookup: {
          from: 'parametersettings',
          localField: "parameterSettingId",
          foreignField: "id",
          as: "paramName",
        }
      },
      
     
      
    ]);
    for (const i in data) {
      data[i].paramName = data[i].paramName[0].param }
      
    let foundObject = [];
    for (const item of data) {
      if (item.recipeId == `${recipeId} `) {
       
       
        foundObject.push(item);
        }}
        const arrayUniqueByKey = [...new Map(foundObject.map(item =>
          [item['paramName'], item])).values()];
    return arrayUniqueByKey;

  }

  update(id: number, updateParameterDto: UpdateParameterDto) {
    return `This action updates a #${id} parameter`;
  }
async findFval() {
    return this.parametersModel.aggregate([
      {
        $group: {
          _id: '$parameterSettingId',
          paramValue: { $last: '$value' }
       }
      }
    ]);
  }




 
}
