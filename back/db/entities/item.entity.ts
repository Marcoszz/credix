import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column()
  quantity: number;

  @Column()
  unitPriceCents: number;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Order, order => order.items)
  order: Order;
}
