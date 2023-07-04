
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type ParameterDocument = HydratedDocument<Parameter>

@Schema()
export class Parameter {
   @Prop({required:true, unique:true, type:Number})
   id:number;

   @Prop()
   machineId: number;

   @Prop()
   recipeId: number;

   @Prop()
   parameterSettingId: number;

   // @Prop()
   // bVal: boolean;

   // @Prop()
   // fVal: number;

   // @Prop()
   // sVal: string
   @Prop()
   value:number;

   @Prop()
   timeStamp: string;

   set nextId(value: number) {
      this.id = value;
    }
}
export const ParametersSchema = SchemaFactory.createForClass(Parameter);