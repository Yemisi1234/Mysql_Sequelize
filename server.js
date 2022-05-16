const express = require('express');
const cors = require('cors');
const router = require('./routes/route.js');

const app = express()

var corsOptions = {
   origin: "http://localhost:8081"
};
//middlewares

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req, res)=>{
    res.json({
        message: 'I am heree'
    })
})
app.use('/product', router)

const PORT = 3000 
app.listen(PORT, ()=>{
    console.log('app is running')
})