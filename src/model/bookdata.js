const mongoose=require("mongoose")

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://user1:user1@fsdlibapp.lcvhf.mongodb.net/libray?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const Schema=mongoose.Schema;
const BooksSchema= new Schema({
    title:String,
    author:String,
    genre:String,
    image:String,
    details:String
});
const bookdata=mongoose.model("bookdata",BooksSchema);
module.exports=bookdata;