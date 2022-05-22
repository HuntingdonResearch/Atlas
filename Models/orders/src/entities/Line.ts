import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { Product } from './Product';
import { Order } from './Order';

@Entity()
export class Line {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @ManyToOne(() => Order, (order: Order) => order.lines)
  order: Order;

  @ManyToOne(() => Product, (product: Product) => product.lines)
  product: Product;
}
