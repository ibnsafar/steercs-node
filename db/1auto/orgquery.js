const knex = require('../knex.js');

module.exports = {
    // creating
    create(org) {
        return knex('organizations').insert(org, '')
    },
    // reading
    readAll() {
        return knex('organizations');
    },
    readOne(id) {
        return knex('organizations').where('id', id).first();
    },
    // updating
    updateOne(id, org) {
        return knex('organizations').where('id', id).update(org, 'org_username');
    },
    // deleting
    delete(id) {
        return knex('organizations').where('id', id).del();
    }
}