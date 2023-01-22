# oclockjsbddconnect
Connexion à une BDD et échanges de données depuis notre code JS avec PostgreSQL grâce à l'utilisation de Promise (2h)

---

## Postgres
>[doc](https://www.postgresql.org/docs/current/index.html)

### connect to postrges
sudo su postgres  
psql

### create user & database
CREATE DATABASE oclockjspg;  
CREATE USER filou WITH ENCRYPTED PASSWORD 'pass';

\du

GRANT ALL PRIVILEGES ON DATABASE oclockjspg TO filou;

### connect database
\c oclockjspg

### create table and insert datas
CREATE TABLE friends (id SERIAL PRIMARY KEY, first_name VARCHAR, last_name VARCHAR, country VARCHAR);

INSERT INTO friends (first_name, last_name, country) VALUES ('romeo', 'elvis', 'belgique');  
INSERT INTO friends (first_name, last_name, country) VALUES ('aurel', 'san', 'france');  

\l

\dt

SELECT * FROM friends;

\q

exit

---

## Init node project
npm init -y

---


