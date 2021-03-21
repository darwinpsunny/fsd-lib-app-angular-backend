const express=require("express")
const userdata=require("../model/userdata")
const signuprouter=express.Router();
function router(navindex,nav)
{ 
    signuprouter.get("/",function(req,res){
        res.render("signup",{
            navindex,
            title:"library",
        });
    })
    signuprouter.post("/signupsubmit",function(req,res){
        res.header("Access-Control-Allow-Orgin","*")
        res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
        var item={
        email:req.body.user.email,
        phonenumber:req.body.user.phonenumber,
        password:req.body.user.password
    }
        var user=userdata(item)
        user.save();
        
    })
    return signuprouter;

}
module.exports=router;