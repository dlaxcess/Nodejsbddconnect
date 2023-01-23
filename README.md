# oclockjsbddconnect
Connexion à une BDD et échanges de données depuis notre code JS avec PostgreSQL grâce à l'utilisation de Promise (2h)

---

## Postgres
>[Postgres doc](https://www.postgresql.org/docs/current/index.html)

### connect to postrges
```console
sudo su postgres  
psql
```

### create user & database
```console
CREATE DATABASE oclockjspg;  
CREATE USER filou WITH ENCRYPTED PASSWORD 'pass';
## ALTER USER filou WITH SUPERUSER

```

```console
\du
```

```console
GRANT ALL PRIVILEGES ON DATABASE oclockjspg TO filou;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO filou;
```

### connect database
```console
\c oclockjspg
```

### create table and insert datas
```console
CREATE TABLE friends (id SERIAL PRIMARY KEY, first_name VARCHAR, last_name VARCHAR, country VARCHAR);
```

```console
INSERT INTO friends (first_name, last_name, country) VALUES ('romeo', 'elvis', 'belgique');  
INSERT INTO friends (first_name, last_name, country) VALUES ('aurel', 'san', 'france');  
```

```console
\l
```

```console
\dt
```

```console
SELECT * FROM friends;
```

```console
\q
```

```console
exit
```

---

## Init node project
```console
npm init -y
```

---

## Add index.js file & test node execution
```console
node index
```

---

## Add pg dependencie & .gitignore
>[npm packages](https://www.npmjs.com/)

>[pg dependencie doc](https://node-postgres.com/)

```console
npm install pg
```

add .gitignore file to ignore node_modules folder

---

## First database fetch
### install dotenv dependencie to hide sensible datas
>[dotenv doc](https://github.com/motdotla/dotenv)

```console
npm install dotenv --save
```

### create .env file with postgreSQL user parameters
```console
PG_USER="filou"
PG_PASSWORD="pass"
PG_DATABASE="oclockjspg"
```

add .env in .gitignore

### add module type in package.json
```console
"type": "module",
## permit ES6 import
```

---

## Query database with 1 param
```console
client.query('SELECT * FROM friends WHERE id = 2', (err, res) => {}
```
for the moment we use a callback function but we'll use Promises soon :)

---

## Fetchin with very simple node server with Promise
Try error gesture

cf More Promise explainations commit

---

## Install nodemon (watcher)
### install nodemon
>[nodemon doc](https://www.npmjs.com/package/nodemon)
```console
npm install --save-dev nodemon

##ou

npm install -D nodemon
```

### run index.js with nodemon
```console
## "nodemon index" not working
npx nodemon index
```

```console
## ou bien script créer le script : 
"dev": "nodemon index",

## Can use since node 18^
node --watch index
```
---

## More Promise explainations
From .then to await

---

## Use Express framework for server
### install express
>[express docs](https://expressjs.com/fr/starter/installing.html)

>[express docs.io](https://devdocs.io/express/starter/installing)
```console
npm install express --save
```

---