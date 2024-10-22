import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { InstallmentsDto } from './installments.dto';
import { ItemDto } from './item.dto';
import { ShippingLocationDto } from './shipping-location.dto';

export class CreateOrderDto {
  @IsInt()
  @ApiProperty()
  subtotalAmountCents: number;

  @ValidateNested()
  @Type(() => ShippingLocationDto)
  @IsNotEmpty()
  @ApiProperty()
  shippingLocation: ShippingLocationDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InstallmentsDto)
  @IsNotEmpty()
  @ApiProperty()
  installments: InstallmentsDto[];

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  buyerTaxId: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  @IsNotEmpty()
  @ApiProperty()
  items: ItemDto[];
}
