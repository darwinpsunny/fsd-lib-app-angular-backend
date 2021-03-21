const express= require('express');
const bodyparser=require("body-parser")
const authorupdaterouter=express.Router();
const authordata=require("../model/authordata");
var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');
function router(nav){
   
    
    authorupdaterouter.post("/update",function(req,res)
  {
      console.log(req.body)
    body=JSON.parse(req.body.author);
    id=body._id;
        authordata.findOne({_id:ObjectId(id)})
        .then(function(author){
                              var oldname=author.name
                          
                              
                              var oldbooks=author.books
                              var oldgenre=author.genre
                              var oldimage=author.image
                              var olddetails=author.details
                              var newname=body.name
                              var newdetails=body.details
                              
                              var newgenre=body.genre
                              var newimage=body.image
                              var newbooks=body.books
                              //console.log("this is"+ req.files)
                              var obj={}
                          if(newname=="")
                          {
                            newname=oldname;
                          }
                          if(newdetails=="")
                          {
                            newdetails=olddetails;
                          }
                         
                          
                          if(newgenre=="")
                          {
                            newgenre=oldgenre;
                          }
                          if(newbooks=="")
                          {
                            newbooks=oldbooks;
                          }
                          
                          
                          if(newimage=="")
                          {
                            newimage=oldimage;
                          }
                          
                          try{
                            
                            var file=req.files.image
                            filename=file.name
                            newimage=filename
                          
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
                            //console.log(err)
                            newimage=oldimage
                          }
                          obj["name"]=newname
                          obj["genre"]=newgenre
                          obj["books"]=newbooks
                          obj["about"]=newdetails
                          obj["image"]=newimage

        
          authordata.updateOne({_id:ObjectId(id)},
              {$set:obj
              },
              )
                .then(result => {
                  // console.log(result)
                  // console .log("result")
                })
                .catch(error => console.error(error))
              
      })
    })
      return authorupdaterouter;
}
module.exports=router;