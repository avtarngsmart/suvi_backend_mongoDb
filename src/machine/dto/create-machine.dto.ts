import { ApiProperty } from "@nestjs/swagger";


export class CreateMachineDto {
 
    @ApiProperty({example:"Suvi"})
    readonly machineToken: string;

    @ApiProperty({example:"Avtar Sorout"})
    readonly customerName?: string;
    
    @ApiProperty({example:"pcb101"})
    readonly machineName?: string;
    

}