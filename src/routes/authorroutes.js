const express= require('express');
var ObjectId = require('mongodb').ObjectID;
const authorrouter=express.Router();
const authordata=require("../model/authordata")
function router(nav){
    
    authorrouter.get("/",function(req,res){
        res.header("Access-Control-Allow-Orgin","*")
        res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
        authordata.find().then(function(authors){
    //    console.log(authors[0])
       
        res.send(authors)

    })
        
    });
    authorrouter.get("/:i",function(req,res){
        console.log("get called")
        res.header("Access-Control-Allow-Orgin","*")
        res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
        const i=req.params.i
        console.log(i)
        authordata.findOne({_id:i})
        .then(function(author){
            res.send(author)
        

        })
    
    });
   
    return authorrouter;
}

module.exports =router;