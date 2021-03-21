const express= require('express');
const bodyparser=require("body-parser")
const authordeleterouter=express.Router();
const authordata=require("../model/authordata");
var ObjectId = require('mongodb').ObjectID;
function router(nav){
   
   
  authordeleterouter.post("/delete",function(req,res){
    res.header("Access-Control-Allow-Orgin","*")
    res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
    var id=req.body.id;
    console .log("result")
    console.log(ObjectId(id))
        authordata.deleteOne({_id:ObjectId(id)},
            
            )
              .then(result => {
                
                console.log(result)
                console .log("result")
                
               })
              .catch(error => console.error(error))
              res.redirect('/authors');
    })
    return authordeleterouter;
}
module.exports=router;