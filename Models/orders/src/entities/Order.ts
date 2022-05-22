import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';
import { User } from './User';
import { Line } from './Line';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  reference: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @OneToMany(() => Line, (line: Line) => line.order)
  lines: Line[];

  @ManyToOne(() => User, (user: User) => user.orders)
  user: User;
}
