import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('ClothesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/clothes (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200);
  });

  it('/clothes (POST)', () => {
    return request(app.getHttpServer())
      .post('/')
      .expect(201);
  });
});