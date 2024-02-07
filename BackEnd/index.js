const express=require("express")
const { connection } = require("./Config/db")
require("dotenv").config()
const cors=require("cors")
const signupRouter = require("./Routes/Signup.route")
const LoginRouter = require("./Routes/Login.route")
const Patient=require("./Routes/Patients.route")
const app=express()

app.use(express.json())


app.use(cors())

app.use("/users",signupRouter)

app.use("/users",LoginRouter)

app.use("/Patients",Patient)

app.get("/",(req,res)=>{
    res.send("Welocme Users")
})

app.listen(process.env.PORT, async()=>{
    try {
        await connection
        console.log("running on port ", process.env.PORT)
        console.log("Server is Runnning")
    } catch (error) {
        console.log(error)
    }
})