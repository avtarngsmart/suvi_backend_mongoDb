
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

import { HydratedDocument } from "mongoose";


export type MachineDocument = HydratedDocument<Machine>

@Schema()
export class Machine {

   @Prop({ type: Number, required: true, unique: true })
   id: number;
    
   @Prop()
   machineToken: string;

   @Prop()
   customerName: string;

   @Prop()
   machineName: string;

   set nextId(value: number) {
    this.id = value;
  }
}
export const MachineSchema = SchemaFactory.createForClass(Machine);