import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Match1714130426227 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "matches",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "number_players",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "information",
                        type: "text",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "match_date",
                        type: "datetime",
                        isNullable: false,
                    },
                    {
                        name: "court_id",
                        type: "int",
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },

                ],
                uniques: [
                    new TableUnique({
                       name: "user_court_date_unique",
                       columnNames: ["user_id", "court_id", "match_date"],
                    }),
                 ],
                foreignKeys: [
                    {
                        columnNames: ["court_id", ],
                        referencedTableName: "courts",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                    {
                        columnNames: ["user_id", ],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    },
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("matches");
    }

}
