
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose";

export type ParameterSettingsDocument = HydratedDocument<ParameterSetting>

@Schema()
export class ParameterSetting {

   @Prop({required:true, unique:true, type:Number})
   id:number;

   @Prop()
   machineId: number;

   @Prop()
   param: string;

   // @Prop()
   // type: string;

   @Prop()
   timeStamp: string;
}
export const ParameterSettingsSchema = SchemaFactory.createForClass(ParameterSetting);