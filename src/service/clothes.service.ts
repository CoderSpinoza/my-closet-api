import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cloth } from '../entity/Cloth';

@Injectable()
export class ClothesService {
  constructor(
    @InjectRepository(Cloth)
    private clothesRepository: Repository<Cloth>,
  ) {}

  async findAll(): Promise<Cloth[]> {
    return this.clothesRepository.find({
      relations: ['owner', 'brand'],
    });
  }
}
