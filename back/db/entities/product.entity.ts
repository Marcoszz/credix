import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  productName: string;

  @Column()
  unitPriceCents: number;

  @Column()
  description: string;

  @Column()
  stockQuantity: number;
}
