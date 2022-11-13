require('express-async-errors');

const cors = require('cors');
const express = require('express');

const routes = require('./routes');
const handlingErrors = require('./middlewares/handlingErrors');

const server = express();

const HOSTNAME = "localhost";
const PORT = 3333;

server.use(cors());

server.use(express.json());

server.use(routes);

// server.use((request, response, next) => {
// 	console.log(`${new Date().toISOString()} -- ${request.method}: ${request.url}`);
// 	next();
// });

server.use(handlingErrors);

server.listen(PORT, () => console.log(`Server is running at http://${HOSTNAME}:${PORT}/`));
