const express=require("express");
const addForm=require('../controllers/formController');

const router=express.Router();

router.post("/add-form",addForm);

module.exports=router;