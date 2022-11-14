const express = require('express')
const cors = require('cors')
const logger = require('morgan')//logger : for seeing in terminal
const PORT = 8524
const app = new express()

const mongoose = require("mongoose")  //db 
mongoose.connect("mongodb+srv://Hazeena:Strong3,.@cluster0.2yh1tlc.mongodb.net/blog",{
    useNewUrlParser: true,    //oro policy pole:false kodutha a package onum ithil accept akoola
useUnifiedTopology: true  //to enable new features of mongodb
})
    .then(() => {
        console.log('mongoDB connected successfully')
})
    .catch((err) => {
        console.log("mongoDB not connected" + err);
});

app.use(cors())//to connect frontend and backend//
app.use(express.json())  //to receive data from frontend//
app.use(express.urlencoded({extended:true})) //images oke vanal restrict cheyathe flowil pokan//
app.use(logger('dev'))


//server code
app.listen(PORT,()=>{
        console.log('............server running at ${PORT}.......')
})

//api
const api = require('./routes/api')
app.use('/api',api)   //frontendil /api il ninum ethoru call vanalim api(33) ilot vidumen kanikunu.

