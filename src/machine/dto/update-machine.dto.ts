import { PartialType } from '@nestjs/mapped-types';
import { CreateMachineDto } from './create-machine.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateMachineDto extends PartialType(CreateMachineDto) {
    @ApiProperty({example:"Suvi"})
    readonly machineToken?: string;

    @ApiProperty({example:"Koushal Khajuria"})
    readonly customerName?: string;
    
    @ApiProperty({example:"pcb101"})
    readonly machineName?: string;
}
