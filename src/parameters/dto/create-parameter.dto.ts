import { ApiProperty } from "@nestjs/swagger";
import { Timestamp } from "rxjs";

export class CreateParameterDto {

  @ApiProperty()
  machineId: number;

  @ApiProperty()
  recipeId: number;

  @ApiProperty()
  parameterSettingId: number;

  // @ApiProperty()
  // bVal: boolean;

  // @ApiProperty()
  // fVal: number;
  @ApiProperty()
  value:number;

  // @ApiProperty()
  // sVal: string;

  @ApiProperty()
  timeStamp: string;


}
