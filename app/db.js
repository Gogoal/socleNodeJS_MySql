import 'babel-polyfill';
import config from './config';

const mysql = require('mysql');

// init db connection
let dbHost;
let dbUser;
let dbPassword;
let dbDatabase;

// Permit to switch environnement
switch (process.env.NODE_ENV) {
  case 'production':
    dbHost = config.dbProdHost;
    dbUser = config.dbProdUser;
    dbPassword = config.dbProdPassword;
    dbDatabase = config.dbProdDatabase;
    break;
  case 'test':
    dbHost = '127.0.0.1';
    dbUser = 'root';
    dbPassword = 'root';
    dbDatabase = 'lfa_db';
    break;
  default:
    dbHost = '127.0.0.1';
    dbUser = 'root';
    dbPassword = 'root';
    dbDatabase = 'lfa_db';
    break;
}


const connection = mysql.createConnection({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbDatabase,
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
