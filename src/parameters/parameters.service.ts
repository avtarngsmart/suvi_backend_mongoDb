import { Injectable } from '@nestjs/common';
import { CreateParameterDto } from './dto/create-parameter.dto';
import { UpdateParameterDto } from './dto/update-parameter.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Parameter } from './schemas/parameters.schema';
import { Model } from 'mongoose';

@Injectable()
export class ParametersService {

  constructor(@InjectModel("Parameter") private parametersModel: Model<Parameter>){}

  async create(createParameterDto: CreateParameterDto) {
    const lastUser = await this.parametersModel.findOne().sort({id:-1}).exec();
    const nextId = lastUser ? lastUser.id + 1 : 1;
    const newParameters = new this.parametersModel({id:nextId, ...createParameterDto})
    return await newParameters.save()
  }

  async findAll() {
    return await this.parametersModel.find();
    // return `This action returns all parameters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parameter`;
  }

  update(id: number, updateParameterDto: UpdateParameterDto) {
    return `This action updates a #${id} parameter`;
  }

  remove(id: number) {
    return `This action removes a #${id} parameter`;
  }


  async findFval() {
    return this.parametersModel.aggregate([
      {
        $group: {
          _id:'$parameterSettingId',
          paramValue: {$max: '$value'}
        }
      }
]);
}
}
