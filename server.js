const express=require("express");
const dotEnv=require("dotenv");
const bodyParser=require("body-parser");
const connectDB = require("./config/db");
const formRoutes=require('./routes/formRoutes');
const cors=require("cors");
const app=express();

dotEnv.config();
connectDB();



const port=5000 || process.env.port;
app.use(bodyParser.json());
app.use(cors());
app.use('/api/user',formRoutes);




app.use('/home',(req,res)=>{
    res.send("<h1> welcome to SUBY</h1>");
});
app.listen(port,()=>{
    console.log(`server started and running on port ${port}`);
});
