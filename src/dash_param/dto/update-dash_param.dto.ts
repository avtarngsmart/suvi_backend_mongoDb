import { PartialType } from '@nestjs/swagger';
import { CreateDashParamDto } from './create-dash_param.dto';

export class UpdateDashParamDto extends PartialType(CreateDashParamDto) {}
