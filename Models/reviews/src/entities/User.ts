import { Entity, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Review } from './Review';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @OneToMany(() => Review, (review: Review) => review.user)
  reviews: Review[];
}
