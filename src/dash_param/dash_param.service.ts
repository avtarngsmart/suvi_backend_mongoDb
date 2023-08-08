// import { Injectable } from '@nestjs/common';
// import { CreateDashParamDto } from './dto/create-dash_param.dto';
// import { UpdateDashParamDto } from './dto/update-dash_param.dto';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import {Dash_Param} from './schema/dash_param.schema';
// // import { Parameter } from 'src/parameters/schemas/parameters.schema';
// // import {Recipe} from '../recipe/schemas/recipe.schema';

// @Injectable()
// export class DashParamService {
//   constructor(@InjectModel(Dash_Param.name) private dashParamModel: Model<Dash_Param>
//   // @InjectModel(Parameter.name) private paramModel:Model<Parameter>
//    ){}
//   async create(createDashParamDto: CreateDashParamDto) {
//     const lastUser = await this.dashParamModel.findOne().sort({ id: -1 }).exec();
//     const nextId = lastUser ? lastUser.id + 1 : 1;
//     const creatDashParam= await this.dashParamModel.create({id:nextId,...createDashParamDto})
//     return await creatDashParam.save();
//   }
// // async findAllDashParams() {
// //     return await this.dashParamModel.find().exec();
// //   }

//   findOne(id: number) {
//     // return this.dashParamModel.find({where:{id}})
//     return `This action returns a #${id} dashParam`;
//   }

//   update(id: number, updateDashParamDto: UpdateDashParamDto) {
//     return `This action updates a #${id} dashParam`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} dashParam`;
//   }


// async GetDashParamByDashId() {
//   // const data=await this.dashParamModel.aggregate([
//   //  {
//   //     $lookup: {
//   //       from: "recipes",
//   //       localField:"recipeId",
//   //       foreignField:"id",
//   //       as: "recipeName",
//   //     }
//   //   }
//     // {
//     //   $lookup:{
//     //     from:'parametersettings',
//     //     localField:"paramId",
//     //     foreignField:"id",
//     //     as: "paramName",
//     //   }
//     // },
//   // ]);
//   const data =this.dashParamModel.find().exec();
//   if(data){
//     console.log("data is",data)
//   }
//   else{
//     console.log("error occured");
//   }
//   return data
//   // console.log("show parameter data",data);
//   // return  data
// //   for(const i in data){
// // data[i].recipeName=data[i].recipeName[0].recipeName
// // data[i].paramName=data[i].paramName[0].param
// //   }
// //     return  data
//     }
// // async GetDashParamByDashIds(payload:any){
// //     const dashIds = payload.dashIds;
// //     const datas=await this.paramModel.aggregate([
// //       {
// //         $lookup:{
// //           from:'parametersettings',
// //           localField:'parameterSettingId',
// //           foreignField:'id',
// //           as:"paramName"
// //         }
// //       },
// //       {
// //         $lookup: {
// //             from: "recipes", 
// //             localField:"recipeId",
// //             foreignField:"id",
// //             as: "recipeName",
// //           }
// //         },
// //     ])

// //     const payloadData= await this.dashParamModel.find({dashId:dashIds}).exec();
// //     console.log("datas--------@@@@@@",datas);
// //     console.log("payloadDAta------------",payloadData);
// //     for(const i in datas){
// //       datas[i].paramName=datas[i].paramName[0].param
// //       datas[i].recipeName=datas[i].recipeName[0].recipeName
// //     }
// //     const matchedData = datas.filter(obj1 =>payloadData.some(obj2=>obj2.recipeId===obj1.recipeId&&obj2.paramId === obj1.parameterSettingId));
// //     return matchedData
// // // const payloadData= await this.dashParamModel.find({dashId:dashIds}).exec();
// // // console.log("payload Data",payloadData);
// // // const datas=await this.dashParamModel.aggregate([
// // //   {
// // //     $lookup:{
// // //     from:'parameters',
// // //     localField:'paramId',
// // //     foreignField:'parameterSettingId',
// // //     as:"fval"
// // //   }
// // //   },
// // //         {
// // //           $lookup: {
// // //             from: "recipes", 
// // //             localField:"recipeId",
// // //             foreignField:"id",
// // //             as: "recipeName",
// // //           }
// // //         },
// // //         {
// // //           $lookup:{
// // //             from:'parametersettings',
// // //             localField:"paramId",
// // //             foreignField:"id",
// // //             as: "param",
// // //           }
// // //         }
// // //         ]);

// //       // const payloadData= await this.dashParamModel.find({dashId:dashIds});

// //       //  var values=[];
// //       // for(const i in datas){
// //       //  datas[i].recipeName=datas[i].recipeName[0].recipeName
// //       //   datas[i].param=datas[i].param[0].param
// //       //   datas[i].fval=datas[i].fval[i].value
// //         // for(const j in datas[i].fval){
// //         //  values.push(datas[i].fval[j].value)
// //         //   }
        
// //         // datas[i].fval=values
// //       }
//       // return datas
    
     
//       // console.log("payloadData--------------",payloadData);
//       // console.log("datas--------------",datas);
//     // const matchedData = datas.filter(obj1 =>payloadData.some(obj2=>obj2.recipeId === obj1.recipeId));
//     // const matchedData = datas.filter(obj1 =>payloadData.some(obj2=>obj2.dashId === obj1.dashId));
//     // const matchedData = datas.filter(obj1 =>payloadData.some(obj2=>obj2.paramId === obj1.paramId));
//     // console.log("matchedData-----------",matchedData);
//     // return matchedData
//     // }
// }

import { Injectable } from '@nestjs/common';
import { CreateDashParamDto } from './dto/create-dash_param.dto';
import { UpdateDashParamDto } from './dto/update-dash_param.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Dash_Param} from './schema/dash_param.schema';
import {Recipe} from '../recipe/schemas/recipe.schema';
import { Parameter } from 'src/parameters/schemas/parameters.schema';

@Injectable()
export class DashParamService {
  constructor(@InjectModel(Dash_Param.name) private dashParamModel:Model<Dash_Param>,
  @InjectModel(Recipe.name) private recipeModel:Model<Recipe>,
  @InjectModel(Parameter.name) private paramModel:Model<Parameter> ){}
  async create(createDashParamDto: CreateDashParamDto) {
    const lastUser = await this.dashParamModel.findOne().sort({ id: -1 }).exec();
    const nextId = lastUser ? lastUser.id + 1 : 1;
    const creatDashParam= await this.dashParamModel.create({id:nextId,...createDashParamDto})
    return await creatDashParam.save();
  }
async findAllDashParams() {
    return await this.dashParamModel.find().exec();
  }


async GetDashParamByDashId() {
  const data= await this.dashParamModel.aggregate([
   {
      $lookup: {
        from: "recipes",
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
  
for(const i in data){
data[i].recipeName=data[i].recipeName[0].recipeName
data[i].paramName=data[i].paramName[0].param
}

   return data
    }
async GetDashParamByDashIds(payload:any){
 
    const dashIds = payload.dashIds;
    const datas=await this.paramModel.aggregate([
      {
        $lookup:{
          from:'parametersettings',
          localField:'parameterSettingId',
          foreignField:'id',
          as:"param"
        }
      },
      {
        $lookup: {
            from: "recipes", 
            localField:"recipeId",
            foreignField:"id",
            as: "recipeName",
          }
        },
    ])

    const payloadData= await this.dashParamModel.find({dashId:dashIds}).exec();
//     // console.log("payloadDAta------------",payloadData);

// for(let dashIds of payloadData){
//     let payloadDatas=dashIds.dashId;
//     for(let i in datas){
//       datas[i].param=datas[i].param[0].param
//       datas[i].recipeName=datas[i].recipeName[0].recipeName
//       // datas[i]['dashId']=datas[i].payloadData[dashIds].dashId
//       datas['dashId']=payloadDatas;
//       console.log("inner loop ---",datas[0].dashId=payloadDatas);

//     }
//      tempData.push(datas)
   
//   }

// let me check
var tempData=[]
for(let j in datas){
  // const {parameterSettingId}=datas[j]
  datas[j].param=datas[j].param[0].param
  datas[j].recipeName=datas[j].recipeName[0].recipeName}

// var looptemp=[]

for(let i in payloadData){
const {recipeId,paramId,dashId}=payloadData[i]
    for(let j in datas){
      const {parameterSettingId}=datas[j]
    if(datas[j].recipeId==recipeId && parameterSettingId==paramId)
    {
      tempData.push({...datas[j],'dashId':dashId})
    }
    else{continue}
    

    }

    //  tempData.push(datas)
   
  }
  // let j=0
  // var check=[]
  // for(let i in tempData){
  
   
  //   tempData[i].dashId=j+1
  //   // console.log('tempdatassss',tempData[i],'loop', looptemp[j])
  
  //   // console.log(`${j}tempdata`,tempData[i]);
  //   // check.push(tempData[i])
  //   // j=j+1
  // }
  return tempData
    // const matchedData = datas.filter(obj1 =>payloadData.some(obj2=>obj2.recipeId===obj1.recipeId&&obj2.paramId === obj1.parameterSettingId));
    // return matchedData
}

}



