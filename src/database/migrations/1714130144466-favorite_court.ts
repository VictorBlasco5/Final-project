import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class FavoriteCourt1714130144466 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "favorite_courts",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "favorite_courts",
                        type: "varchar",
                        length: "100",
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },
                    {
                        name: "court_id",
                        type: "int",
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("favorite_courts");
    }

}
