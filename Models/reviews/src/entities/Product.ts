import { Entity, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Review } from './Review';

@Entity()
export class Product {
  @PrimaryColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @OneToMany(() => Review, (review: Review) => review.product)
  reviews: Review[];
}
