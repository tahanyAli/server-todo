const {Pool} = require("pg");

const UserName=process.env.PG_USERNAME;
const Host=process.env.PG_HOST;
const Password=process.env.PG_PASSWORD;
const Port=process.env.PG_PORT;
const Database=process.env.PG_DATABASE;
const pool=new Pool({
    user: UserName,
    password: Password,
    host: Host,
    port:Port,
    database: Database
});

module.exports = pool;