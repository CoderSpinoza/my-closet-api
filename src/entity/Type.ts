import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cloth } from './Cloth';

import { BaseEntity } from './BaseEntity';

@Entity()
export class Type extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => Cloth,
    cloth => cloth.type,
  )
  clothes: Cloth[];
}
