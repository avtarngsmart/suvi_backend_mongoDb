import { Test, TestingModule } from '@nestjs/testing';
import { DashParamController } from './dash_param.controller';
import { DashParamService } from './dash_param.service';

describe('DashParamController', () => {
  let controller: DashParamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashParamController],
      providers: [DashParamService],
    }).compile();

    controller = module.get<DashParamController>(DashParamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
