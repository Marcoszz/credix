import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dtos/create-order.dto';
import credixCredipay from '../../api/apis/credix-credipay';

@Injectable()
export class OrdersService {
    async createOrder(createOrderDto: CreateOrderDto) {
        const payload = {
            ...createOrderDto,
            externalId: process.env.SELLER_REF,
            taxAmountCents: Number(process.env.TAX_AMOUNT_CENTS),
            shippingCostCents: Number(process.env.SHIPPING_COSTS_CENTS),
            sellerTaxId: process.env.SELLER_TAX_ID,
            estimatedDeliveryDate: new Date(),
        }

        try {
            credixCredipay.auth(process.env.CREDIPAY_API_KEY);
            const response = await credixCredipay.postCreateOrder(payload);
        } catch (error) {
            throw new Error(error);
        }
    }
}
