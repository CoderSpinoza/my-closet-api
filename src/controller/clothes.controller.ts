import { Controller, Get } from '@nestjs/common';
import { Cloth } from '../entity/Cloth';
import { ClothesService } from '../service/clothes.service';

@Controller('clothes')
export class ClothesController {
  constructor(private clothesService: ClothesService) {}
  @Get()
  findAll(): Promise<Cloth[]> {
    return this.clothesService.findAll();
  }
}
