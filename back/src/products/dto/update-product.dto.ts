import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsOptional()
    productName?: string;

    @IsInt()
    @IsNotEmpty()
    @ApiProperty() 
    @IsOptional()
    unitPriceCents?: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    @IsOptional()
    description?: string;

    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    @IsOptional()
    stockQuantity?: number;

}
