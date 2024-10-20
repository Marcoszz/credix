import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOrdersAndInstallments1729460340540 implements MigrationInterface {
    name = 'CreateOrdersAndInstallments1729460340540'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "installment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "maturityDate" TIMESTAMP NOT NULL, "faceValueCents" integer NOT NULL, "status" character varying NOT NULL, "fundedAt" TIMESTAMP NOT NULL DEFAULT now(), "settledAt" TIMESTAMP NOT NULL DEFAULT now(), "orderId" uuid, CONSTRAINT "PK_c79b5b68e8b6293a0210ce7dbda" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "externalId" character varying, "subtotalAmountCents" integer NOT NULL, "taxAmountCents" integer NOT NULL, "shippingCostCents" integer NOT NULL, "buyerFeesCents" integer NOT NULL, "totalAmountCents" integer NOT NULL, "shippingLocation" jsonb NOT NULL, "paymentTermDays" integer NOT NULL, "status" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "estimatedDeliveryDate" TIMESTAMP, "sellerTaxId" character varying NOT NULL, "buyerTaxId" character varying NOT NULL, "noAdvancing" boolean NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "installment" ADD CONSTRAINT "FK_d95f98907ef394d4b0ec5ea2c43" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "installment" DROP CONSTRAINT "FK_d95f98907ef394d4b0ec5ea2c43"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "installment"`);
    }

}
