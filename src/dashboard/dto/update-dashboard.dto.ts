import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateDashboardDto } from './create-dashboard.dto';

export class UpdateDashboardDto extends PartialType(CreateDashboardDto) {
    @ApiProperty({example:"loc_x",required:true})
    loc_x:number 
    @ApiProperty({example:"loc_y",required:true})
    loc_y:number 
    @ApiProperty({example:"size_x",required:true})
    size_x:number
    @ApiProperty({example:"size_y",required:true})
    size_y:number
}
