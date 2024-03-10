import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1710107781568 implements MigrationInterface {
    name = 'Default1710107781568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`rooms\` (\`id\` int NOT NULL, \`name\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`videos\` (\`id\` int NOT NULL, \`title\` text NOT NULL, \`url\` text NOT NULL, \`room_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD CONSTRAINT \`FK_64bb2d8544299bbde670698ac37\` FOREIGN KEY (\`room_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`videos\` DROP FOREIGN KEY \`FK_64bb2d8544299bbde670698ac37\``);
        await queryRunner.query(`DROP TABLE \`videos\``);
        await queryRunner.query(`DROP TABLE \`rooms\``);
    }

}
