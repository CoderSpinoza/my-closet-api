import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cloth } from './Cloth';
import { BaseEntity } from './BaseEntity';

@Entity()
export class ClothMonth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Cloth,
    cloth => cloth.months,
  )
  clothes: Cloth[];
}
