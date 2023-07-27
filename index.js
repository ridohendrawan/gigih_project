require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error',(error)=>{
    console.log(error);
});
database.on('connected',()=>{
    console.log('Database Connected');
});

const app = express();
app.use(express.json());

const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.use('/api',routes);
const port = 3000;
app.listen(port,()=>{
    console.log(`Server Started at ${3000}`);   
})