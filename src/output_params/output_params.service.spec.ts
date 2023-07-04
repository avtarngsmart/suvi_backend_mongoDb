import { Test, TestingModule } from '@nestjs/testing';
import { OutputParamsService } from './output_params.service';

describe('OutputParamsService', () => {
  let service: OutputParamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutputParamsService],
    }).compile();

    service = module.get<OutputParamsService>(OutputParamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
