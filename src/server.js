import cors from 'cors';
import express from 'express';

import { AppError } from './config/AppError'; 

const server = express();

const HOSTNAME = "localhost";
const PORT = 3333;

server.use(cors());
server.use(express.json());

server.use((request, response, next) => {
	console.log(`${new Date().toISOString()} -- ${request.method}: ${request.url}`); next();
});

express.use((error, request, response, next) => {
	if ( error instanceof AppError ) {
		
	}
});

server.listen(PORT, () => console.log(`Server is running at http://${HOSTNAME}:${PORT}/`));
