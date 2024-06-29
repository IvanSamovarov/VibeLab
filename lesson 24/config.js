const { Pool } = require('pg');

const pool = new Pool({
    user: 'Ivan',
    host: 'localhost',
    database: 'database',
    password: 'postgres',
    port: 5432,
});

module.exports = {
    pool,
};