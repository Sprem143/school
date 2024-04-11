const express= require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
const session = require('express-session')
const PORT = 8000;
app.use(cors());
const connectDb = require('./config/mongoose')
connectDb();

app.use(session({
    secret: 'myschool',
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 3600000 // Session expiration time (in milliseconds), e.g., 1 hour
    }
}));

app.use(express.json());
app.use(bodyParser.json());
app.use('/',require('./router.js'));
// session


app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Server is running on port: ${PORT}`)
    }
})