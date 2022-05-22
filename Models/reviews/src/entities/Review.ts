import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Product } from './Product';
import { User } from './User';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  subject: string;

  @Column()
  content: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @ManyToOne(() => Product, (product: Product) => product.reviews)
  product: Product;

  @ManyToOne(() => User, (user: User) => user.reviews)
  user: User;
}
