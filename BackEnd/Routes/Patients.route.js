const express = require('express')
const PatientsRoute = express.Router()
const PatientsModal = require('../Model/Patients.model')
// const {auth}=require("../Middleware/auth.middleware")

PatientsRoute.get('/Patients', async (req, res) => {
    try {
        let Post= await PatientsModal.find()
        res.status(200).send(Post)
       
      } catch (error) {
          res.status(400).send({error:err.message})
      }
})


PatientsRoute.post('/ManyPatients', async (req, res) => {
    try {
        const ArrayData= req.body
        const SaveData=await PatientsModal.insertMany(ArrayData)
        res.status(200).send({ postData: SaveData, message: "Many Patients added Successfully" })
    } catch (error) {

        res.status(400).send({ error: error, message: "Patient is Not Posted" })
    }
   
})

PatientsRoute.post('/Patients', async (req, res) => {
    try {
       let postData =new PatientsModal(req.body)
       console.log(postData)
       await postData.save()
       res.status(200).send({ postData: postData, message: "Patients added Successfully" })
    } catch (error) {

        res.status(400).send({ error: error, message: "Patient is Not Posted" })
    }
    
})


PatientsRoute.patch('/Patients/:id', async (req, res) => {
    // console.log(req.body, req.params)
    // let IdFound= await PatientsModal.findOne({_id : req.params.id})
    let UpdatePost = await PatientsModal.updateOne({ _id: req.params.id }, req.body)
    // console.log(IdFound)
    res.send({ message: "The Patient has been updated Successfully", UpdatePost })
})


PatientsRoute.delete('/Patients/:id', async (req, res) => {
    let deletePost = await PatientsModal.deleteOne({ _id: req.params.id })
    
    res.send({ message: "The Patient has been deleted Successfully", deletePost })
})



module.exports = PatientsRoute