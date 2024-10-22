import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class ItemDto {
    [key: string]: unknown;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    productId: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    productName: string;
  
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    quantity: number;
  
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    unitPriceCents: number;
  }