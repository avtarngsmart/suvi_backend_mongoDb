import { ApiProperty } from "@nestjs/swagger";

export class CreateParameterSettingDto {
  
  @ApiProperty()
  machineId: number;
  
  @ApiProperty()
  param: string;

  // @ApiProperty()
  // type: string;

  @ApiProperty()
  timeStamp: string;
}
