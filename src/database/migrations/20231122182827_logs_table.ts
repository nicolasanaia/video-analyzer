import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('logs', (table: Knex.TableBuilder) => {
        table.increments('id').primary().notNullable().unique();
        table.dateTime('date').nullable();
        table.string('level').nullable();
        table.string('module').nullable();
        table.string('message', 150).nullable();
        table.json('object').nullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('logs');
}

