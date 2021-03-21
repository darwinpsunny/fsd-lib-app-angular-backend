const express=require("express")
const userdata=require("../model/userdata")
const jwt=require("jsonwebtoken")

const loginrouter=express.Router();
function router(navindex,nav)
{ var message="";
    // loginrouter.get("/",function(req,res){
    //     res.render("login",{
    //         navindex,
    //         title:"library",
    //     message});
    // })
    loginrouter.post("/",function(req,res){
        Eid=req.body.email;
        paswrd=req.body.password
        express.static('public')
        userdata.findOne({$and:[{email:Eid},{password:paswrd}]})
        .then(function(user){
            console.log(user)
            if(!user){
                res.status(401).send("invalid pass")
            }
            
            else{ let payload={subject:Eid+paswrd}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token})
                
            }
         
        

        })
       
    })
    return loginrouter;

}
module.exports=router;