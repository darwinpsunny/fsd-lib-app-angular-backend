const express= require('express');
const bodyparser=require("body-parser")
const addauthorrouter=express.Router();
const bookdata=require("../model/bookdata");
const authordata = require('../model/authordata');
const { json } = require('body-parser');

function router(nav){
    addauthorrouter.get("/",function(req,res){
        res.render("addauthors",{
            nav,
            title: 'library'});
    });
    addauthorrouter.post("/add",function(req,res){
        console.log(req.body)
        console.log(req.files)
        body=JSON.parse(req.body.author);
        console.log(body)

        try{
            var file=req.files.image
            filename=file.name
            console.log(filename)
          
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
            name: body.name,
            books: body.books,
            genre: body. genre,
            about:body.about,
            image:filename
         }
        var author=authordata(item)
        author.save();
        
    })
   
    return addauthorrouter;

}


 

module.exports=router;