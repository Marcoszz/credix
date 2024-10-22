import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateItemEntity1729640644752 implements MigrationInterface {
    name = 'UpdateItemEntity1729640644752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "productName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "item" ADD "unitPriceCents" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "unitPriceCents"`);
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "productName"`);
    }

}
