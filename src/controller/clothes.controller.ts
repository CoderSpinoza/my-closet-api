import { Controller, Get } from '@nestjs/common';
import { Cloth } from 'src/entity/Cloth';
import { ClothesService } from 'src/service/clothes.service';

@Controller('clothes')
export class ClothesController {
  constructor(private clothesService: ClothesService) {}
  @Get()
  findAll(): Promise<Cloth[]> {
    return this.clothesService.findAll();
  }
}
