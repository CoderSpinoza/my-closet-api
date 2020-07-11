import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cloth } from 'src/entity/Cloth';
import { Repository } from 'typeorm';

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
