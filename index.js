console.log('oh yeaaah it works!!!');

// require('dotenv').config();
import dotenv from 'dotenv'
dotenv.config()

// const {Client} = require('pg');
import pg from 'pg';
const {Client} = pg;

const client = new Client({
    host: "localhost",
    user: process.env.PG_USER,
    port: 5432,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});
// console.log("process.env.PG_USER", process.env.PG_USER)
// console.log("process.env.PG_PASSWORD", process.env.PG_PASSWORD)

client.connect();

client.query('SELECT * FROM friends', (err, res) => {
    if(!err) {
        console.log(res.rows);
    } else {
        console.log("zut : " + err.message);
    }

    client.end();
})