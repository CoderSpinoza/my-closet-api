import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cloth } from './Cloth';

import { BaseEntity } from './BaseEntity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => Cloth,
    cloth => cloth.owner,
  )
  clothes: Cloth[];
}
