import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { Cloth } from './Cloth';
import { BaseEntity } from './BaseEntity';

@Entity()
export class Brand extends BaseEntity {
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
