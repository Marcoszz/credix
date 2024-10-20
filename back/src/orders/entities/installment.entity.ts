import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Installment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  maturityDate: Date;

  @Column()
  faceValueCents: number;

  @ManyToOne(() => Order, (order) => order.installments)
  order: Order;

  @Column()
  status: 'fundingSuccess' | 'settled';

  @CreateDateColumn()
  fundedAt: Date;

  @CreateDateColumn()
  settledAt: Date;
}
