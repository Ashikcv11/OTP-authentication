const mongoose = require("mongoose")
// const DB = "mongodb+srv://sajithjayaram:mylibraryapp@cluster0.2pltx.mongodb.net/librarydb?retryWrites=true&w=majority"
const DB = "mongodb+srv://ashikcv:NtZ7fORecmRAHuul@cluster0.xwu725d.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
 console.log("Database Connection Successful")
}).catch((err)=>{
 console.log(err)
})

// const userSchema = new mongoose.Schema({
//     email: { type: String,required:true, unique: true},
//     otp: {type: String, required:false},
// });

// var userSchema = new mongoose.Schema({
//     email: String,
//     otp:Number
//    }, {
//     versionKey: false
//    })

const Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    otp:Number
   }, {
    versionKey: false
   })

const users =new  mongoose.model('User',UserSchema);
module.exports = users;