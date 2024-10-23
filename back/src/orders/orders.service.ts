import credixCredipay from '@api/credix-credipay';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'db/entities/order.entity';
import { ProductsService } from 'src/products/products.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>, 
        private readonly productsService: ProductsService,
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
        
        await this.orderRepository.manager.transaction(async (transactionEntityManager) => {
            credixCredipay.auth(process.env.CREDIPAY_API_KEY);
            order = {
                ...(await credixCredipay.postCreateOrder(payload)).data, 
                estimatedDeliveryDate: payload.estimatedDeliveryDate,
                items: payload.items.map(item => ({
                    quantity: item.quantity,
                    productName: item.productName,
                    unitPriceCents: item.unitPriceCents,
                    product: { id: item.productId }
                })), 
            };
            
            await transactionEntityManager.save(Order, order);

            for (const item of payload.items) {
                const product = await this.productsService.findOne(item.productId);
                await this.productsService.update(item.productId, { stockQuantity: product.stockQuantity - item.quantity });
            }
        });
        

        return order
    }
}
