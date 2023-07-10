import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type dashboardDocument=HydratedDocument<Dashboard>
@Schema()

export class Dashboard{
    @Prop({type: Number, required: true, unique: true})
    id:number;
    
    @Prop()
    dashboardName: string  

    @Prop()
    machineToken:string

    @Prop()
    loc_x:number

    @Prop()
    loc_y:number

    @Prop()
    size_x:number
    
    @Prop()
    size_y:number
    @Prop({default:new Date})
     timestamp: Date;
}
export const dashboardSchema=SchemaFactory.createForClass(Dashboard);