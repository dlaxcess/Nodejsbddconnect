import express from 'express';

import { fetch, fetchOne } from './src/services/database.js';


const app = express()
const PORT = 8080

app.get("/friends", async (req, res ) => {
    let fetchResult = await fetch();

    console.log("fetchResult", fetchResult);

    res.send(fetchResult);
})

app.get("/friends/:id", async (req, res) => {
    const id = parseInt(req.params['id']);
    const result = await fetchOne(id);
    
    console.log("result", result);
    
    res.send(result);
})

app.get("/*", (_, res) => {
    res.send('Oups : Page not found')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
