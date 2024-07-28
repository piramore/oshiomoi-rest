import { Test, TestingModule } from '@nestjs/testing';
import { OshiController } from './oshi.controller';

describe('OshiController', () => {
  let controller: OshiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OshiController],
    }).compile();

    controller = module.get<OshiController>(OshiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
