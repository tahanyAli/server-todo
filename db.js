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
// postgres://perntodo_o4i5_user:trRabs70nWN0wjlDHiaVV0hU3XMpWePw@dpg-cncf7cect0pc73frdhl0-a/perntodo_o4i5
// const pool = new Pool({
//     connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// })
module.exports = pool;