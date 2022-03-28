# steercs-node
npm install --save knex pg
knex init
knex migrate:make students
knex migrate:latest
knex seed:make
knex seed:run //for testing seed values

npm install nodemon --save-dev