import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1710345175373 implements MigrationInterface {
    name = 'Default1710345175373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`videos\` DROP FOREIGN KEY \`FK_64bb2d8544299bbde670698ac37\``);
        await queryRunner.query(`ALTER TABLE \`videos\` CHANGE \`description\` \`description\` text NULL`);
        await queryRunner.query(`ALTER TABLE \`videos\` CHANGE \`room_id\` \`room_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`room_subject\` DROP FOREIGN KEY \`FK_a05f10c497f5f7db3022664a6d6\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`id\` int NOT NULL PRIMARY KEY AUTO_INCREMENT`);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD CONSTRAINT \`FK_64bb2d8544299bbde670698ac37\` FOREIGN KEY (\`room_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`room_subject\` ADD CONSTRAINT \`FK_a05f10c497f5f7db3022664a6d6\` FOREIGN KEY (\`subject_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`room_subject\` DROP FOREIGN KEY \`FK_a05f10c497f5f7db3022664a6d6\``);
        await queryRunner.query(`ALTER TABLE \`videos\` DROP FOREIGN KEY \`FK_64bb2d8544299bbde670698ac37\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD \`id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`rooms\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`room_subject\` ADD CONSTRAINT \`FK_a05f10c497f5f7db3022664a6d6\` FOREIGN KEY (\`subject_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`videos\` CHANGE \`room_id\` \`room_id\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`videos\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`videos\` ADD CONSTRAINT \`FK_64bb2d8544299bbde670698ac37\` FOREIGN KEY (\`room_id\`) REFERENCES \`rooms\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`rooms\` DROP COLUMN \`description\``);
    }

}
