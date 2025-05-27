const LeadForm=require('../models/LeadForm');

const addForm=async(req,res)=>{
    try {
        const {name,email,company,message}=req.body;
        const newForm = new LeadForm({ name, email, company, message });
        await newForm.save();
        res.status(201).json({ success: true, message: "Form submitted successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json("internal server error");
    }
}
module.exports=addForm;