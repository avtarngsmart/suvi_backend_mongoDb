import { Test, TestingModule } from '@nestjs/testing';
import { DashParamService } from './dash_param.service';

describe('DashParamService', () => {
  let service: DashParamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DashParamService],
    }).compile();

    service = module.get<DashParamService>(DashParamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
