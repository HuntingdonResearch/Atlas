import { Entity, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Line } from './Line';

@Entity()
export class Product {
  @PrimaryColumn()
  id: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @OneToMany(() => Line, (line: Line) => line.product)
  lines: Line[];
}
