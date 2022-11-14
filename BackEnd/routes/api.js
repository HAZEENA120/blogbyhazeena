const express = require('express')
const router = express.Router()  //routing function
const DATA = require('../models/article') //intialise article.js values
//article full details

router.get('/articlelist', async(req,res) => {
    try {
        
            const list = await DATA.find();//article list le full dataye edukun
            res.send(list); //db il nin full data listil save aki,frontendilek save cheynm.
            console.log('from get method ${list}');
    } catch (error) {
            console.log('error from get method ${error}');
    }
});

//article add

router.post('/article',async(req,res) => {
    try {
        console.log(req.body)
        let item = { //to fetch data from front end and in server
        name : req.body.name,
        age : req.body.age
    }
    const newArticle = new DATA(item); //to check incoming data
    const saveArticle = await newArticle.save(); //mongoDB save
    console.log('error from post method ${saveArticle}');
    res.send(saveArticle);
        
    } catch (error) {

        console.log('error from get method ${error}');
        
    }
});

//Article delete

router.delete('/article/:id',async(req,res) => {
    try {
        let id = req.params.id;
        const deleteArticle = await DATA.findByIdAndDelete(id);
        console.log('from delete method ${deleteArticle}');
        res.send(deleteArticle);
    } catch (error) {
        console.log('error from get method ${error}');
        
    }
})


//Article update

router.put('/Article',async(req,res) => {
    try {
        
        let id = req.body.id;
        let item = { //to fetch and save data from frontend in server
            "name": req.body.name,
            "age": req.body.age
        }
        let updateData = { $set: item}
        let updateArticle = await DATA.findByIdAndUpdate({'id': id});
        res.send(updateArticle);
        console.log('from put method old data ${updateArticle}');
    } catch (error) {
        console.log('error from get method ${error}');
        
    }
});



//single Article detail
router.get('/student/:id',async(req,res) => {
    try {

        let id = req.params.id;
        const singleArticle = await DATA.findById(id);
        console.log('from get with id method ${singlearticle}');
        res.send(singleArticle) 

    } catch (error) {
        console.log('error from get method ${error}');
    }
});





module.exports = router