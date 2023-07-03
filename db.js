const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "ayush123",
    port: 5432,
    database: "atlan"
});

module.exports = pool;