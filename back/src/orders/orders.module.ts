import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from 'db/entities/order.entity';
import { Item } from 'db/entities/item.entity';
import { Installment } from 'db/entities/installment.entity';
import { Product } from 'db/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Item, Installment, Product])],
  controllers: [OrdersController],
  providers: [OrdersService],
  exports: [OrdersService],
})
export class OrdersModule {}
