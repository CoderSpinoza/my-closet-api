import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ClothMaterial } from './ClothMaterial';

import { BaseEntity } from './BaseEntity';

@Entity()
export class Material extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => ClothMaterial,
    clothMaterial => clothMaterial.material,
  )
  clothes: ClothMaterial[];
}
