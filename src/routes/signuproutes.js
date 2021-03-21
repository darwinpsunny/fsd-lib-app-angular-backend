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
        var item={
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        password:req.body.password
    }
        var user=userdata(item)
        user.save();
        res.redirect('/login')
    })
    return signuprouter;

}
module.exports=router;