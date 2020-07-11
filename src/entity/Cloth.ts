import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinTable,
} from 'typeorm';
import { User } from './user';
import { type } from 'os';
import { Brand } from './Brand';
import { Material } from './Material';
import { ClothMaterial } from './ClothMaterial';
import { Color } from './Color';
import { Type } from './Type';
import { ClothMonth } from './ClothMonth';

@Entity()
export class Cloth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    type => User,
    user => user.clothes,
  )
  @Column()
  owner: User;

  @ManyToOne(
    type => Brand,
    brand => brand.clothes,
  )
  @Column()
  brand: Brand;

  @ManyToOne(
    type => Color,
    color => color.clothes,
  )
  color: Color;

  @ManyToOne(
    type => Type,
    type => type.clothes,
  )
  type: Type;

  @Column()
  yearReleased: number;

  @Column()
  yearBought: number;

  @OneToMany(
    type => ClothMaterial,
    clothMaterial => clothMaterial.cloth,
  )
  materials: ClothMaterial[];

  @OneToMany(
    type => ClothMonth,
    clothMonth => clothMonth.clothes,
  )
  months: ClothMonth[];
}
