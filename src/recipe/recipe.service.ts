import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './schemas/recipe.schema';
import { Model } from 'mongoose';
import { last } from 'rxjs';

@Injectable()
export class RecipeService {
  constructor(@InjectModel("Recipe") private recipeModel: Model<Recipe>){}


  async create(createRecipeDto: CreateRecipeDto) {
    const lastUser =await this.recipeModel.findOne().sort({ id: -1 }).exec();
    const nextId = lastUser ? lastUser.id + 1 : 1;
    const newRecipe = new this.recipeModel({id:nextId, ...createRecipeDto});
    const created =await newRecipe.save();
    return created;
  }

  async getAllRecipeData() {
    const recipeData = await this.recipeModel.find();
    if (!recipeData || recipeData.length == 0) {
        throw new NotFoundException('machines data not found!');
    }
    return recipeData;
  
  }

  async findOne(id: number) {
    const findData= await this.recipeModel.findOne({id}) 
    return findData
   }

  findByRecipe(machineId,recipeName:any){
    return this.recipeModel.findOne({machineId,recipeName})
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto) {
   const resData= this.findOne(id)
  const _id=(await resData)._id
  console.log("update onjectID  ------",typeof(_id))
  //  const resData= this.recipeModel.findOne({id});
  //  resData.
    const existingRecipe = this.recipeModel.findByIdAndUpdate(_id, updateRecipeDto, { new: true });
    return existingRecipe
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
