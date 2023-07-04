import { Test, TestingModule } from '@nestjs/testing';
import { OutputParamsController } from './output_params.controller';
import { OutputParamsService } from './output_params.service';

describe('OutputParamsController', () => {
  let controller: OutputParamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutputParamsController],
      providers: [OutputParamsService],
    }).compile();

    controller = module.get<OutputParamsController>(OutputParamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
