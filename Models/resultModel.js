const mongoose=require("mongoose")
const resultSchema=new mongoose.Schema(
    {
        name:String,
        regNo:String,
        sub1:String,
        sub2:String,
        status:String
    }
)
module.exports=mongoose.model("results",resultSchema)