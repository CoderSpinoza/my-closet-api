import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Cloth } from './Cloth';
import { ClothMaterial } from './ClothMaterial';

@Entity()
export class Material {
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
