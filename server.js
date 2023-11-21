require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect( process.env.DATABASE_URL).then(() => {console.log('CONNECTED TO MONGO')
}).catch((err) => {
    console.log('OH NO! MONGO CONNECTION ERROR!');
    console.log(err);
    
});

app.use(express.json())


const subscriberRouter = require('./routes/subscribers')

app.use('/subscribers', subscriberRouter)













app.listen(3000, () => console.log('server has started'));