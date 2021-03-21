const express= require('express');
const bodyparser=require("body-parser")
const adminrouter=express.Router();
const bookdata=require("../model/bookdata")

function router(nav){
    
    adminrouter.post("/add",function(req,res){
       console.log(req.body)
       body=JSON.parse(req.body.book);
        try{
            var file=req.files.image
            filename=file.name
            
          
            file.mv("./public/imgs/"+filename,function(err){
                if(err){
console.log(err)
                }
                else{
                    console.log("file in the server")
                }

            })
        }
        catch(err){
            console.log("error in thcatch")
           filename="";
          }
       
 
        var item={
            title: body.title,
            author:body.author,
            genre: body. genre,
            details:body.description,
            image:filename
         }
        var book=bookdata(item)
        book.save();
       
    })
   
    return adminrouter;

}


 

module.exports=router;