import express from "express";
import { PORT, mongoDBURL } from "./config.js"; 
import mongoose from "mongoose";

const app = express()


app.get('/', (request,response) => {
    console.log(request);
    return response.status(234).send('MERN'); 
}); 


mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('App is connected to database'); 
    app.listen(PORT, () => {
        console.log(`app is listening port: ${PORT}`); 
    })
})
.catch((error)=> {
    console.log(error); 

}); 
