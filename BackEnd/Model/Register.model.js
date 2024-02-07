const mongoose=require("mongoose")

const RegisterSchema=mongoose.Schema({
    Username:String,
    Avatar :String,
    age:Number,
    Email:String,
    Password:String
})

const RegisterModel=mongoose.model("CareTrack-signup", RegisterSchema)

module.exports=RegisterModel