import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory, MockType } from '../helpers/test';
import { ClothesController } from './clothes.controller';
import { ClothesService } from '../service/clothes.service';
import { Cloth } from '../entity/Cloth';

describe('ClothesController', () => {
  let controller: ClothesController;

  let repository: MockType<Repository<Cloth>>;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClothesController],
      providers: [
        ClothesService,
        {
          provide: getRepositoryToken(Cloth),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    controller = app.get<ClothesController>(ClothesController);
    repository = app.get(getRepositoryToken(Cloth));
  });

  describe('findAll()', () => {
    it('should return empty list', async () => {
      repository.find.mockReturnValue([]);
      expect(await controller.findAll()).toStrictEqual([]);
      expect(repository.find).toHaveBeenCalledTimes(1);
    });
  });
});
