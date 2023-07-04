import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Dash_Param{
    @Prop({require:true})
    id:number;
    @Prop({require:true})
    dashId:number
    @Prop({require:true})
    recipeId:number
    @Prop({require:true})
    paramId:number
    // @Prop()
    // format:number
    @Prop()
    isActive:boolean;
}
export const Dash_ParamSchema =SchemaFactory.createForClass(Dash_Param)