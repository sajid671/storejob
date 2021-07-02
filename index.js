const express = require('express');
var cors = require('cors')
const connectDB=require('./config/db')
const path = require("path");
const GrocRouter = require('./controller/routers')
const port = process.env.PORT || 5100;

connectDB();
var app=express();

app.use(express.json());
app.use(cors())

app.use('/product',GrocRouter)



if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port,()=>console.log("server started"))