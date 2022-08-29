import express from 'express';
import cors from 'cors';


const server = express();
server.use(cors()); 
server.use(express.json()); 


const login = (req, res) => {
    res.json("This is the login")
}

server.use('/login', login)


const PORT = 5099;

server.listen(PORT, () => console.log(`Server is listening to port ${PORT} and running`));

