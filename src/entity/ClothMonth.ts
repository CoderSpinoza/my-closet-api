import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cloth } from './Cloth';

@Entity()
export class ClothMonth {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Cloth,
    cloth => cloth.months,
  )
  clothes: Cloth[];
}
