const mongoose=require("mongoose")

const PatientsSchema=mongoose.Schema({
    image:String,
    name :String,
    age:Number,
    Contact:Number,
    gender:String,
    Hisotry:String
})

const PatientsModel=mongoose.model("CareTrack-Patients", PatientsSchema)

module.exports=PatientsModel


