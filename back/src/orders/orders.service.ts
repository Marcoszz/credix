import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'db/entities/order.entity';
import { Product } from 'db/entities/product.entity';
import { Repository } from 'typeorm';
import credixCredipay from '@api/credix-credipay';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>, 
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>, 
    ) {}

    async createOrder(createOrderDto: CreateOrderDto) {
        const payload = {
            ...createOrderDto,
            externalId: process.env.SELLER_REF,
            taxAmountCents: Number(process.env.TAX_AMOUNT_CENTS),
            shippingCostCents: Number(process.env.SHIPPING_COSTS_CENTS),
            sellerTaxId: process.env.SELLER_TAX_ID,
            estimatedDeliveryDate: new Date(),
        }

        let order;

        console.log(payload)

        try {
            await this.orderRepository.manager.transaction(async (transactionEntityManager) => {
                credixCredipay.auth(process.env.CREDIPAY_API_KEY);
                order = (await credixCredipay.postCreateOrder(payload)).data;
                console.log("passou")
                await transactionEntityManager.save(order);

                for (const item of payload.items) {
                    const product = await this.productRepository.findOne({where: {id: item.productId}});

                    if (!product) throw new Error();
                    
                    product.stockQuantity -= item.quantity;
                    await transactionEntityManager.save(product);
                }
            });
        } catch (error) {
            console.log(error)
            throw new Error(error);
        }

        return order
    }
}
