const express = require('express');
const router = require('./app');
const app = express();
const port = 8080;


app.use('/', router)

app.listen(port, ()=>{
    console.log(`server is getting hotter on port http://localhost:${port}`);
})