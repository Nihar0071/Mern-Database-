import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.route.js';
dotenv.config(); 

mongoose.connect(process.env.Mongo)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const app = express();
app.use(express.json());
app.listen(3000, ()=>{
    console.log('Server is running on Port 3000 ')
    } 
);

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);
