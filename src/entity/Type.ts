import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cloth } from './Cloth';

@Entity()
export class Type {
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
