import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateInstallment1729575189187 implements MigrationInterface {
    name = 'UpdateInstallment1729575189187'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "installment" ADD "faceValueCents" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "installment" DROP COLUMN "faceValueCents"`);
    }

}
