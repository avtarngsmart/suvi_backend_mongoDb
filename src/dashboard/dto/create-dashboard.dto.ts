import { ApiProperty } from "@nestjs/swagger"

export class CreateDashboardDto {
    @ApiProperty({example:"machineToken",required:true})
    machineToken:string
    @ApiProperty({example:"dashName1",required:true})
    dashboardName: string 
    @ApiProperty({example:1,required:true})
    loc_x:number 
    @ApiProperty({example:2,required:true})
    loc_y:number 
    @ApiProperty({example:1,required:true})
    size_x:number
    @ApiProperty({example:1,required:true})
    size_y:number
}
