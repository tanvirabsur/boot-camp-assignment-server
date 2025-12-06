const express = require('express');
const { client } = require('./db');
const { ObjectId } = require('mongodb');
const router = express.Router();


const collection = client.db('data-of-college').collection('data');
const usersCollection = client.db('users').collection('users');

router.get('/', (req,res)=>{
    res.send('Hello from the router!');
})

router.get('/colleges', async (req,res)=>{
    const colleges = await collection.find({}).toArray();
    res.send(colleges);
})

router.get('/users', async (req,res)=>{
    const data = await usersCollection.find({}).toArray();
    res.send(data);
});

router.post('/create-user', async (req,res)=>{
    const newUser = req.body;
    const result = await usersCollection.insertOne(newUser);
    res.send(result);
});

router.get('/colleges/:id', async (req,res)=>{
    const collegeId = req.params.id;
    const data = await collection.findOne({});
    const college = data.colleges.find(c => c.id === collegeId);
    res.send(college || { message: 'College not found' });
});

router.get('/reviews', async (req,res)=>{
    const data = await collection.findOne({});
    res.send(data.reviews);
});



module.exports = router