const express = require('express');
const router = require('./app');
const { run } = require('./db');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const port = 8080;
run()

app.use('/', router)


app.listen(port, ()=>{
    console.log(`server is getting hotter on port http://localhost:${port}`);
})