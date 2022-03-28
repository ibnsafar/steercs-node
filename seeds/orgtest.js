/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('organizations').del()
  await knex('organizations').insert([
    {
      org_name:"fast",
      org_username:"fast1",
      email:"fast@gmail.com",
      org_password:"po12po12po",
      org_pnumber:"123456789"
    },
    {
      org_name:"fast",
      org_username:"fast2",
      email:"fast2@gmail.com",
      org_password:"po12po12po",
      org_pnumber:"123456788"
    },
    {
      org_name:"fast",
      org_username:"fast3",
      email:"fast3@gmail.com",
      org_password:"po12po12po",
      org_pnumber:"123456787"
    }
  ]);
};
