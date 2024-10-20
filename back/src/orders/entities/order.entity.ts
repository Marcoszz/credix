import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Installment } from './installment.entity';

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
  shippingLocation: {
    address1: string;
    address2?: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };

  @Column()
  paymentTermDays: number;

  @Column()
  status: 'created' | 'finalized' | 'captured' | 'cancelled';

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
  
  @OneToMany(() => Installment, (installment) => installment.order)
  installments: Installment[];
}
