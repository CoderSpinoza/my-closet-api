import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cloth } from './Cloth';

@Entity()
export class Color {
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
