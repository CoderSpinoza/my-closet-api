import { CreateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';

export class BaseEntity {
  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  updateCreatedAt(): void {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  updateUpatedAt(): void {
    this.updatedAt = new Date();
  }
}
