import { ApiProperty } from "@nestjs/swagger";
import { Timestamp } from "rxjs";

export class CreateParameterDto {

  @ApiProperty()
  machineId: number;

  @ApiProperty()
  recipeId: number;

  @ApiProperty()
  parameterSettingId: number;

  @ApiProperty()
  value:number;

  @ApiProperty()
  timeStamp: string;


}
