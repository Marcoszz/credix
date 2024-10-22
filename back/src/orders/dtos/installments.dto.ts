import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class InstallmentsDto {
    [key: string]: unknown;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    maturityDate: string;
  
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    faceValueCents: number;
}