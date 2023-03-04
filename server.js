
const express = require('express');
const server = express();
const CORS = require('cors');

const cv = require('./data');

const PORT = process.env.PORT || 8080;

server.use(CORS({
        origin: '*',
        credentials: true,
    }));


server.use(express.json());
console.log(cv);
server.get('/data', (req,res)=>{
        res.send(cv);
        });

server.listen(PORT, ()=>console.log('Server Running on Port ', PORT));


