import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateMachineDto } from "./dto/create-machine.dto";
import { UpdateMachineDto } from "./dto/update-machine.dto";
import { Imachine } from "./interface/machine.interface";
@Injectable()
export class MachineService {
  constructor(
    @InjectModel('Machine') private machineModel:Model<Imachine>) { }
async createMachine(createMachineDto: CreateMachineDto) {
  const {machineToken,customerName,machineName}=createMachineDto
    const lastUser = await this.machineModel.findOne().sort({ id: -1 }).exec();
    const nextId = lastUser ? lastUser.id + 1 : 1;
    function randomString(len) {
      var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      return [...Array(len)].reduce(a => a + p[~~(Math.random() * p.length)], '');
  }
  const tokenId = randomString(7)
    const newMachine = new this.machineModel({id:nextId,machineToken:tokenId,customerName:customerName,machineName:machineName});
    return await newMachine.save()
  }
  findById(id:number){
    return this.machineModel.findOne({id})
  }
  async findByMachine(machineToken: string){
    return await this.machineModel.findOne({machineToken});
}
async updateMachine(id:number, updateMachineDto: UpdateMachineDto): Promise<Imachine> {
  const machData=this.findById(id)
  const _id=(await machData)._id
    const existingMachine =await this.machineModel.findByIdAndUpdate(_id, updateMachineDto, { new: true });
  //  if (!existingMachine) {
  //    throw new NotFoundException(`machine #${_id} not found`);
  //  }
   return existingMachine;
  }

  async getAllMachines(): Promise<Imachine[]> {
    const machineData = await this.machineModel.find();
    if (!machineData || machineData.length == 0) {
        throw new NotFoundException('machines data not found!');
    }
    return machineData;
  }
}