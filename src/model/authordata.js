const mongoose=require("mongoose")

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://user1:user1@fsdlibapp.lcvhf.mongodb.net/libray?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const Schema=mongoose.Schema;
const authorSchema= new Schema({
    name:String,
    books:String,
    genre:String,
    image:String,
    about:String
});
const authordata=mongoose.model("authordata",authorSchema);
module.exports=authordata;