import { Injectable } from '@nestjs/common';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dashboard } from './schemas/dashboard.schema';

@Injectable()
export class DashboardService{
  constructor(@InjectModel(Dashboard.name) private dashboardModel: Model<Dashboard>) {}
  async create(createDashboardDto: CreateDashboardDto): Promise<Dashboard>{
  const lastUser = await this.dashboardModel.findOne().sort({ id: -1 }).exec();
    const nextId = lastUser ? lastUser.id + 1 : 1;
  const data=new this.dashboardModel({id:nextId,...createDashboardDto})
  return await data.save();
  }

 async findAll():Promise<Dashboard[]> {
  return await this.dashboardModel.find().exec();
 }

  async findOne(id: number) {
    return await  this.dashboardModel.findOne({id});
   }

 async update(id: number, updateDashboardDto: UpdateDashboardDto) {
    const recpData=await this.findOne(id)
    const ids=recpData._id
    const updatingDashboard=await this.dashboardModel.findByIdAndUpdate(ids,updateDashboardDto,{ new: true })
    return updatingDashboard
  }
async remove(id: number) {
   const dashData= await this.findOne(id)
   const Ids= dashData._id
  return  await this.dashboardModel.deleteOne(Ids);
 }
}
