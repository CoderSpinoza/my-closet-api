import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { Cloth } from './Cloth';

Entity();
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => Cloth,
    cloth => cloth.brand,
  )
  clothes: Cloth[];
}
