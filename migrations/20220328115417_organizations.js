/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('organizations', (table) => {
        // name username email password phone is not null
        table.increments('id').primary().unique(),
            table.text('org_name').notNullable(),
            table.text('org_username').checkLength('>=', 5).notNullable().unique(),
            table.text('email').notNullable().unique(),
            table.text('org_password').checkLength('>=', 10).notNullable(),
            table.text('org_pnumber').checkLength('>=', 9).notNullable().unique()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
