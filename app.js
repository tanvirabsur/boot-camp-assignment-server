const express = require('express');
const router = express.Router();


router.get('/', (req,res)=>{
    res.send('Hello from the router!');
})

router.get('/colleges', (req,res)=>{
    res.send('List of colleges will be here.');
})

router.get('/colleges/:id', (req,res)=>{
    const collegeId = req.params.id;
    res.send(`Details of college with ID: ${collegeId}`);
});

router.get('/reviews', (req,res)=>{
    res.send('List of reviews will be here.');
});

module.exports = router