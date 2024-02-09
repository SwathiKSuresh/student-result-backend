const express=require("express")
const resultModel=require("../Models/resultModel")
const router=express.Router()


router.post("/add",async(req,res)=>{
    let data=req.body
    let addResult=new resultModel(data)
    let result=await addResult.save()
    res.json({
        status:"success"
    })
})


module.exports=router