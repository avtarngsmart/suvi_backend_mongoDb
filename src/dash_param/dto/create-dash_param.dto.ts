import { ApiProperty } from "@nestjs/swagger"

export class CreateDashParamDto {
    @ApiProperty({example:1})
    dashId:number
    @ApiProperty({example:1})
    recipeId:number
    @ApiProperty({example:1})
    paramId:number

    
}
