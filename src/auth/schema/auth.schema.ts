import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose';
@Schema({
  timestamps: true,
})
export class Auth extends Document {
@Prop()
name:string;
@Prop({unique:true})
email:string;
@Prop()
password:string;
}
export const authSchema=SchemaFactory.createForClass(Auth)