import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login.js';

const server = express();
server.use(cors()); 
server.use(express.json()); 






server.use('/', loginRouter);


const PORT = process.env.PORT || 5099;

server.listen(PORT, () => console.log(`Server is listening to port ${PORT} and running`));

