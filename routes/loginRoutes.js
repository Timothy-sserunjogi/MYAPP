const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/userModel.js')
const path = require('path');

router.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '../views', 'login.html'));
  })

  router.post('/', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/login/userlist'
  })
  );

  router.get('/userlist',async(req, res) => {  
    try {
      let items = await User.find()
      if (req.query.firstName){
      items = await User.find({firstName:req.query.firstName})
          }
          res.render('list', { users: items })
        } catch (err) {
          res.status(400).send("unable to find items in the database");
        }
      })


      module.exports = router;    