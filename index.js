import express from "express";
import mongoose from "mongoose";
import RegisterControllers from "./controllers/Register.controllers.js";
import cors from 'cors';
import dotenv from 'dotenv';
import RootRouter from "./routers/root.router.js";
dotenv.config();
await mongoose.connect(process.env.MONGO_URL).then(() =>{
    console.log('connected database');
});
const app = express();
app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend URL
    credentials: true // Allow cookies to be sent and received
}));

app.use(express.json());


app.use('/',RootRouter);

app.post('/register',RegisterControllers.register);

app.listen(process.env.PORT, () => {
    console.log('server is running...')
})