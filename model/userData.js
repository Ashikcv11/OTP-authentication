const mongoose = require("mongoose")

const DB = "mongodb+srv://ashikcv:NtZ7fORecmRAHuul@cluster0.xwu725d.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(DB,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
 console.log("Database Connection Successful")
}).catch((err)=>{
 console.log(err)
})


const Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: String,
    otp:Number
   }, {
    versionKey: false
   })

const users =new  mongoose.model('User',UserSchema);
module.exports = users;
