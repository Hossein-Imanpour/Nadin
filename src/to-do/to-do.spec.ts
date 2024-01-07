import { Test, TestingModule } from '@nestjs/testing';
import { ToDo } from './to-do';

describe('ToDo', () => {
  let provider: ToDo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToDo],
    }).compile();

    provider = module.get<ToDo>(ToDo);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
