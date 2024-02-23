const {Pool} = require("pg");

// const pool=new Pool({
//     user: "tahany",
//     password: "0502078454",
//     host: "localhost",
//     port:5432,
//     database: "perntodo"
// });
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})
module.exports = pool;