require('express-async-errors');

const cors = require('cors');
const express = require('express');

const routes = require('./routes');
const sqliteConnection = require('./database/sqlite');
const form = require('./utils/functions/formattedDate');
const handlingErrors = require('./middlewares/handlingErrors');

const date = form();
const server = express();

const HOSTNAME = "localhost";
const PORT = 3333;

server.use(cors());

server.use(express.json());

server.use(routes);

sqliteConnection();

server.use(handlingErrors);

server.listen(PORT, () => console.log(`Today is ${date} and Server is running at http://${HOSTNAME}:${PORT}/`));
