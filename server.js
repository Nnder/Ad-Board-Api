import express from "express";
import router from "./Router/Router.js";
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/api/', router);


const MONGO_USERNAME = 'admin';
const MONGO_PASSWORD = 'dlAwialkghalaglajwiog';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'board';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;


async function start(){
    try {
        await mongoose.connect(url, {useNewUrlParser: true});
        app.listen(PORT, ()=>{
            console.log(`Server started on port: ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();

