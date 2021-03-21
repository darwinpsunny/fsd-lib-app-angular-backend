const express= require('express');
const bodyparser=require("body-parser")
const deleterouter=express.Router();
const bookdata=require("../model/bookdata");
var ObjectId = require('mongodb').ObjectID;
function router(nav){
   
   
  deleterouter.post("/delete",function(req,res){
    var id=req.body.id;
    
    console .log("result")
    console.log(ObjectId(id))
        bookdata.deleteOne({_id:ObjectId(id)},
            
            )
              .then(result => {
                console.log(result)
                console .log("result")
               })
              .catch(error => console.error(error))
              res.redirect('/books');
    })
    return deleterouter;
}
module.exports=router;