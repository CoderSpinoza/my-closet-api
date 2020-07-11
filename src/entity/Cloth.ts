import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './User';
import { Brand } from './Brand';
import { ClothMaterial } from './ClothMaterial';
import { Color } from './Color';
import { Type } from './Type';
import { ClothMonth } from './ClothMonth';
import { BaseEntity } from './BaseEntity';
@Entity()
export class Cloth extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    type => User,
    user => user.clothes,
  )
  owner: User;

  @ManyToOne(
    type => Brand,
    brand => brand.clothes,
  )
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
