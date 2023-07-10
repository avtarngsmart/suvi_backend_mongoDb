import { ApiProperty } from "@nestjs/swagger";

export class CreateDatumDto {

  @ApiProperty({example:"Suvi"})
  readonly machineToken: string;

  @ApiProperty({example:"Coffee"})
  readonly recipeName: string;

  @ApiProperty({example:"Milk"})
  readonly param: string;

  @ApiProperty({example:"0"})
  readonly type: string;

  @ApiProperty({example:"242"})
  // readonly value: boolean | number | string;
  readonly value:number;

  @ApiProperty({example:"3-21-2018T11:14:23.11"})
  readonly timeStamp: string;

}

export class CreateDatumArrayDto{
  @ApiProperty({ type: [CreateDatumDto] }) 
  GenerateMachinesData: CreateDatumDto[];
}