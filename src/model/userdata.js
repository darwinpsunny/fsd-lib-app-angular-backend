const mongoose=require("mongoose")

mongoose.set('useFindAndModify', false);
mongoose.connect("mongodb+srv://user1:user1@fsdlibapp.lcvhf.mongodb.net/libray?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
const Schema=mongoose.Schema;
const userSchema= new Schema({
    email:String,
    phonenumber:Number,
    password:String,
    
});
const userdata=mongoose.model("userdata",userSchema);
module.exports=userdata;