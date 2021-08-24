//DataBase
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "3215987asd",
  host: "localhost",
  port: 3000,
  database: "api_test",
});

module.exports = pool;
