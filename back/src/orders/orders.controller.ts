import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrdersService } from './orders.service';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiBody({ type: CreateOrderDto })
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    try {
      const result = await this.ordersService.createOrder(createOrderDto);
      return result;
    } catch (error) {
      return {
        message: 'Erro ao criar ordem',
        error: error.message,
      };
    }
  }
}
