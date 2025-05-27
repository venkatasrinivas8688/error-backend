const mongoose=require("mongoose");

const formSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{type:String,required:true},
    company:{type:String},
    message:{type:String}
})
const LeadForm=mongoose.model("LeadForm",formSchema);

module.exports=LeadForm;