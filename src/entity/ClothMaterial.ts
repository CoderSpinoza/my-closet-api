import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Cloth } from './Cloth';
import { Material } from './Material';
import { BaseEntity } from './BaseEntity';

@Entity()
export class ClothMaterial extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    type => Cloth,
    cloth => cloth.materials,
    { primary: true },
  )
  cloth: Cloth;

  @ManyToOne(
    type => Material,
    material => material.clothes,
    { primary: true },
  )
  material: Material;

  @Column('double')
  percentage: number;
}
