const express= require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const PORT = process.env.PORT || 8050;
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const connectDb = require('./config/mongoose')
connectDb();



// app.use(express.json());
app.use(bodyParser.json());



app.use('/',require('./router.js'));

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server is running on port: ${PORT}`)
    }
})