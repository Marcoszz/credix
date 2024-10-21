import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Installment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  maturityDate: Date;

  @ManyToOne(() => Order, (order) => order.installments)
  order: Order;
}
