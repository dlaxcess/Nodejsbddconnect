import express from 'express';

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import { fetch, fetchOne, addOne } from './src/services/database.js';

const app = express();
const PORT = 8080;

const __dirname = dirname(fileURLToPath(import.meta.url))
// console.log("__dirname", __dirname)
const indexHtml = join(__dirname, 'src/html/index.html');
// console.log("indexHtml", indexHtml)


app.get("/", (req, res) => {
    try {
       res.sendFile(indexHtml);
    } catch(err) {
       res.status(500).send(`Mnnnhhh... bad : ${err.message}`);
    }
})

app.get("/friends", async (req, res) => {
    try {
        let fetchResult = await fetch();
    
        console.log("fetchResult", fetchResult);
    
        res.send(fetchResult);
    } catch(err) {
        res.status(500).send(`Mnnnhhh... bad : ${err.message}`);
    }
})

app.get("/friends/:id", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const result = await fetchOne(id);
        
        console.log("result", result);
        
        res.send(result);
    } catch(err) {
        next(err);
    }
})

app.get("/add", async (req, res) => {
    const query = req.query;
    
    await addOne(query.fname, query.lname, query.country);
    res.send("Amis ajouté, c'est toujours bon d'ajouter un ami :)");
})

app.get("/*", (_, res) => {
    res.status(404).send('Oups : Page not found');
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(`Oups something went wrong : ${err.message}`);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
