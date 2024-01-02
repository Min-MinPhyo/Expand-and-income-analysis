const mongoose=require("mongoose")

const inexSchema=new mongoose.Schema({
    type:{
        type:String,
        required:[true,"add type"]
       
    },
    category:{
        type:String,
        required:true
    }
})

const inexModel=mongoose.model("incomeExpense",inexSchema)
module.exports=inexModel
