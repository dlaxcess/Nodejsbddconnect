import pg from 'pg';
const {Client} = pg;

import dotenv from 'dotenv'
dotenv.config()

const client = new Client({
    host: "localhost",
    user: process.env.PG_USER,
    port: 5432,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
});

client.connect();


export const fetch = async () => {
    const stringResult = await client.query('select * from friends');
    return stringResult.rows;
}

export const fetchOne = async (id) => {
    const res = await client.query('select * from friends where id= $1', [id]);
    return res.rows[0];
}

export const addOne = async (firstName, lastName, country) => {
    return client.query('INSERT INTO friends (first_name, last_name, country) VALUES ($1, $2, $3); ', [firstName, lastName, country]);
}