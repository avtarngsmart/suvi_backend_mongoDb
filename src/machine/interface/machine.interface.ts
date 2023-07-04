import { Document } from "mongoose";

export interface Imachine extends Document{
//  readonly id:number;
  readonly machineToken: string;

  readonly customerName:string;
 
  readonly machineName: string;
}