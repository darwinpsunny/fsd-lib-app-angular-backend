const express= require('express');

const booksrouter=express.Router();
const bookdata=require("../model/bookdata")
function router(nav){
    
    booksrouter.get("/",function(req,res){
        res.header("Access-Control-Allow-Orgin","*")
        res.header("Access-Control-Allow-Methods,GET,POST,PATCH,PUT,DELETE,OPTIONS")
        bookdata.find().then(function(books){
        
        console.log(books)
           res.send(books);

    })
        
    });
    booksrouter.get("/:i",function(req,res){
        const i=req.params.i
        bookdata.findOne({_id:i})
        .then(function(book){
            res.send(book)
        

        })
    
    });
   
    return booksrouter;
}

module.exports =router;