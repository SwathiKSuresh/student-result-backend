const cors=require("cors")
const express=require("express")
const mongoose=require("mongoose")
const resultRoute=require("./Components/AddResult")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Swathi:Swathi123@cluster0.om2gp.mongodb.net/ResultDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/result",resultRoute)


app.listen(3001,()=>{
    console.log("Server Running")
})