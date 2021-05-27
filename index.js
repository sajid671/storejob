const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const connectDB=require('./config/db')
const path = require("path");
const GrocRouter = require('./controller/routers')
const port = process.env.PORT || 5000;

connectDB();
const app=express();
app.use(bodyParser.json());
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello from my site")
})
app.use('/product',GrocRouter)



if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port,()=>console.log("server started"))