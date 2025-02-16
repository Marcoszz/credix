import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Installment } from './installment.entity';
import { Item } from './item.entity';
import { ShippingLocationDto } from 'src/orders/dtos/shipping-location.dto';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  externalId: string;

  @Column()
  subtotalAmountCents: number;

  @Column()
  taxAmountCents: number;

  @Column()
  shippingCostCents: number;

  @Column()
  buyerFeesCents: number;

  @Column()
  totalAmountCents: number;

  @Column('jsonb')
  shippingLocation: ShippingLocationDto;

  @Column()
  paymentTermDays: number;

  @Column()
  status: 'accepted' | 'created' | 'finalized' | 'captured' | 'cancelled' ;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  estimatedDeliveryDate: Date;

  @Column()
  sellerTaxId: string;

  @Column()
  buyerTaxId: string;

  @Column()
  noAdvancing: boolean;
  
  @OneToMany(() => Installment, (installment) => installment.order, {cascade: true})
  installments: Installment[];

  @OneToMany(() => Item, (item) => item.order, { cascade: true })
  items: Item[];
}
