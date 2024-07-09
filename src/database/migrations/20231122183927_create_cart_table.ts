import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('carts', (table: Knex.TableBuilder) => {
        table.increments('id').primary().notNullable();
        table.string('orderFormId');
        table.dateTime('creationDate');
        table.dateTime('expirationDate');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('carts');
}

