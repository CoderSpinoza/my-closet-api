import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cloth } from './Cloth';

import { BaseEntity } from './BaseEntity';

@Entity()
export class Color extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hex: number;

  @OneToMany(
    type => Cloth,
    cloth => cloth.color,
  )
  clothes: Cloth[];
}
