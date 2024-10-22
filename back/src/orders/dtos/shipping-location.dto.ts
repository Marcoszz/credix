import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ShippingLocationDto {
    [key: string]: unknown;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    address1: string;
  
    @IsString()
    @IsOptional()
    @ApiProperty()
    address2?: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    city: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    region: string;
  
    @IsString()
    @IsNotEmpty()
    postalCode: string;
  
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    country: string;
  }