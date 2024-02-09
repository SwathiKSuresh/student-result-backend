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

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await resultModel.find(input)
    res.json(data)
})


module.exports=router