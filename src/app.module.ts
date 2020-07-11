import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothesController } from './controller/clothes.controller';
import { ClothesService } from './service/clothes.service';
import { configService } from './service/config.service';
import { User } from './entity/User';
import { Cloth } from './entity/Cloth';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([User, Cloth]),
  ],
  controllers: [ClothesController],
  providers: [ClothesService],
})
export class AppModule {}
