import { ApiProperty } from "@nestjs/swagger"

export class CreateOutputParamDto {
    @ApiProperty({example:"param1"})
    paramName:string
    @ApiProperty({example:"token1"})
    machineToken:string
    @ApiProperty({example:1})
    loc_x:number
    @ApiProperty({example:2})
    loc_y:number
    @ApiProperty({example:3})
    size_x:number
    @ApiProperty({example:2})
    size_y:number
}
