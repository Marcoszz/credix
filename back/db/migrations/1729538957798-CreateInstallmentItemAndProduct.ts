import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateInstallmentItemAndProduct1729538957798 implements MigrationInterface {
    name = 'CreateInstallmentItemAndProduct1729538957798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "productName" character varying NOT NULL, "unitPriceCents" integer NOT NULL, "description" character varying NOT NULL, "stockQuantity" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "productId" uuid, "orderId" uuid, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "installment" DROP COLUMN "faceValueCents"`);
        await queryRunner.query(`ALTER TABLE "installment" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "installment" DROP COLUMN "fundedAt"`);
        await queryRunner.query(`ALTER TABLE "installment" DROP COLUMN "settledAt"`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_ab25455f602addda94c12635c60" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_950e218c17c81d5a9ffa1b96080" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_950e218c17c81d5a9ffa1b96080"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_ab25455f602addda94c12635c60"`);
        await queryRunner.query(`ALTER TABLE "installment" ADD "settledAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "installment" ADD "fundedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "installment" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "installment" ADD "faceValueCents" integer NOT NULL`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
