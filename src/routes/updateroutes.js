const express= require('express');
const bodyparser=require("body-parser")
const updaterouter=express.Router();
const bookdata=require("../model/bookdata");
var ObjectId = require('mongodb').ObjectID;
function router(nav){
   
    updaterouter.get("/:i",function(req,res){
       var id1=req.params.i;
       console.log(id1)
       
        res.render("updatebook",{
            nav,
            
            id1,
            title: 'library'});
    });
  updaterouter.post("/update",function(req,res)
  { console.log("yes")
  body=JSON.parse(req.body.book);
      var id=body._id;
      console.log(id)
        
        bookdata.findOne({_id:ObjectId(id)})
        .then(function(book){console.log(book)
                              var oldtitle=book.title
                              console.log(oldtitle)
                              var oldauthor=book.author
                              var oldgenre=book.genre
                              var olddetails=book.details
                              var oldimage=book.image
                              var newtitle=body.title
                              var newauthor=body.author
                              var newgenre=body.genre
                              var newdetails=body.details
                              var newimage=body.image
                             
                              // console.log("this is"+ req.files)
                              var obj={}
                          if(newtitle=="")
                          {
                            newtitle=oldtitle;
                          }
                          
                          if(newauthor=="")
                          {
                            newauthor=oldauthor;
                          }
                          
                          if(newgenre=="")
                          {
                            newgenre=oldgenre;
                          }
                          if(newdetails=="")
                          {
                            newdetails=olddetails;
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
                            console.log("error in thcatch")
                            newimage=oldimage
                          }
                          obj["title"]=newtitle
                          obj["genre"]=newgenre
                          obj["author"]=newauthor
                          obj["details"]=newdetails
                          obj["image"]=newimage

        
          bookdata.updateOne({_id:ObjectId(id)},
              {$set:obj
              },
              )
                .then(result => {
                  // console.log(result)
                  // console .log("result")
                })
                .catch(error => console.error(error))
                res.redirect('/books');
      })
    })
      return updaterouter;
}
module.exports=router;