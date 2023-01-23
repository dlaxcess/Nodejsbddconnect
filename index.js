import {createServer} from 'node:http'

// require('dotenv').config();
import dotenv from 'dotenv'
dotenv.config()

// const {Client} = require('pg');
import pg from 'pg';
const {Client} = pg;

console.log('oh yeaaah it works!!!');

const client = new Client({
    host: "localhost",
    user: process.env.PG_USER,
    port: 5432,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});

client.connect();

const server = createServer(async (req, res) => {
    // res.write('hello');
    // res.end();

    let output;

    try {
        const response = await client.query('SELECT * FROM friends')
        output = JSON.stringify(response.rows);
    } catch(e) {
        console.error(e.message);
        output = e.message;
    }

    res.write(output);
    res.end();
});

server.listen('8080');

const friends = //await
client.query('select * from friends')
    .then((res) => {
        const fetchResult = res.rows;
        console.log("fetchResult : ", fetchResult);

        return fetchResult;
    })
    .catch(e => {
        console.error(e.message);
    });

console.log("friends : ", friends);