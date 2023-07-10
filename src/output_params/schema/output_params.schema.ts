import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type Output_paramsDocument = HydratedDocument<Output_params>
@Schema()

export class Output_params{
@Prop()
id:number;
@Prop()
paramName:string;
@Prop()
machineToken:string;
@Prop()
loc_x:number;
@Prop()
loc_y:number;
@Prop()
size_x:number;
@Prop()
size_y:number;
// @Column({ type: "timestamp", default: () => "NOW()" })
@Prop({default:new Date()})
timeStamp:Date
}
export const Output_paramsSchema=SchemaFactory.createForClass(Output_params)