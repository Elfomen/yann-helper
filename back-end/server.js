import express from 'express';
import connectToTheDatabase from './config/database.js'
const port = process.env.port || 5000

const app = express();
connectToTheDatabase();

app.listen(port , () => {
    console.log("The app is running on port " + port); 
})