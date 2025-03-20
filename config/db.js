const pgp = require('pg-promise')();
require('dotenv').config();
const db = pgp({
    host: process.env.DB_HOST | 'localhost',
    port: 5432,
    database: process.env.DB_NAME | 'online_book_store',
    user: process.env.DB_USER | 'postgres',
    password: process.env.DB_PASS | '2025'
});
module.exports = db;