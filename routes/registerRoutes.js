const express = require('express');
const router = express.Router();
const User = require('../models/userModel.js')
const path = require('path');


router.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../views', 'index.html'));
  })
  
//this is the post route
router.post("/", async (req, res) => {
    try{
        var user = new User(req.body);
        await User.register(user, req.body.password, (err) =>{
          if(err) {throw err}
          res.redirect('/login')
        })
    }catch (error){
            res.status(400).send("unable to save to database");
        }
    })


    

module.exports = router;    