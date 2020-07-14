import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnection, createConnection } from 'typeorm';

import { repositoryMockFactory, MockType } from '../helpers/test';
import { Cloth } from '../entity/Cloth';
import { ClothesService } from './clothes.service';
import { User } from '../entity/User';
import { entities } from '../entity';
import { configService } from './config.service';

describe('ClothesService', () => {
  let service: ClothesService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(configService.getTestTypeOrmConfig()),
        TypeOrmModule.forFeature([Cloth]),
      ],
      providers: [ClothesService],
    }).compile();

    service = app.get(ClothesService);
  });

  afterEach(() => {
    return getConnection().close();
  });

  describe('findAll()', () => {
    it('should return empty list', async () => {
      const list = await service.findAll();
      expect(list.length).toEqual(0);
    });
  });
});
