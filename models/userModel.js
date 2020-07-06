const mongoose = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

var registerSchema = new mongoose.Schema({
    firstName: String,
    nickName: String,
    Email: String,
    Date_of_birth: Date,
  
    gender: String,
    


  });

  registerSchema.plugin(passportLocalMongoose, {usernameField: 'Email'})

module.exports = mongoose.model("User", registerSchema);
