import express from 'express';
import cors from 'cors';
import loginRouter from './routes/login.js';
import emailview from './routes/emailview.js';
import { connectDB } from './helpers/dbConnect.js';
import mongoose from 'mongoose';



const server = express();
server.use(cors()); 
server.use(express.json()); 


server.use('/', loginRouter);
server.use('/read', emailview);


connectDB();
mongoose.connection.on("open", () => {
        console.log("connected to db")
});
mongoose.connection.on("error", (error) => {
console.log("Connection to MongoDB has failed ", error.message);
    
});


const PORT = process.env.PORT || 5099;

server.listen(PORT, () => console.log(`Server is listening to port ${PORT} and running`));

