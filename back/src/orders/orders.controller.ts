import { Body, Controller, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dtos/create-order.dto';
import { OrdersService } from './orders.service';
import { FetchError } from 'node-fetch'; 
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
      if (error instanceof Object) {
        if (error.data) {
          throw new HttpException(
            {
              error: error.data,
            },
            HttpStatus.BAD_REQUEST,
          );
        } else {
          throw new HttpException(
            {
              status: HttpStatus.BAD_REQUEST,
              error: error.message,
            },
            HttpStatus.BAD_REQUEST,
          );
        }
      } 
        
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'An error occurred while processing your request.',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
