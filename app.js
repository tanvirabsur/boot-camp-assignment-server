const express = require('express');
const { client } = require('./db');
const router = express.Router();


const collection = client.db('data-of-college').collection('data')

router.get('/', (req,res)=>{
    res.send('Hello from the router!');
})

router.get('/colleges', async (req,res)=>{
    const colleges = await collection.find({}).toArray();
    res.send(colleges);
})

router.get('/colleges/:id', (req,res)=>{
    const collegeId = req.params.id;
    res.send(`Details of college with ID: ${collegeId}`);
});

router.get('/reviews', (req,res)=>{
    res.send('List of reviews will be here.');
});

module.exports = router