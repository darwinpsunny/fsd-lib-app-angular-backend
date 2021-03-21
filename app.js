const express= require('express');
const fileUpload = require('express-fileupload');
var bodyparser=require('body-parser');
const cors=require('cors');
const jwt=require("jsonwebtoken")
const app=new express();
app.use(cors());
app.use(bodyparser.json());
const port=process.env.PORT || 3000
const nav=[{link:'/books',name:'books'} ,{link:'/authors',name:'authors'},{link:'/admin',name:'add book'},{link:'/addauthors',name:'add author'}];

const navindex=[{link:'/signup',name:'SIGNUP'},{link:'/login',name:"LOGIN"}];
const booksrouter=require("./src/routes/bookroutes")(nav);
const authorrouter=require("./src/routes/authorroutes")(nav);
const adminrouter=require("./src/routes/adminroutes")(nav);
const addauthorrouter=require("./src/routes/addauthorsroutes")(nav);
const loginrouter=require("./src/routes/loginroutes")(navindex);
const updaterouter=require("./src/routes/updateroutes")(nav);
const deleterouter=require("./src/routes/deleteroutes")(nav);
const updateauthorrouter=require("./src/routes/authorupdateroutes")(nav);
const deleteauthorrouter=require("./src/routes/authordeleteroutes")(nav);
const signuprouter=require("./src/routes/signuproutes")(navindex);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.use(express.static('./public/imgs'));
app.use(fileUpload());
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksrouter);
app.use("/authors",authorrouter);
app.use("/admin",adminrouter);
app.use("/addauthors",addauthorrouter);
app.use("/login",loginrouter);
app.use("/signup",signuprouter);
app.use("/updatebooks",updaterouter);
app.use("/deletebooks",deleterouter);
app.use("/updateauthors",updateauthorrouter);
app.use("/deleteauthors",deleteauthorrouter);







app.listen(port,()=>{console.log(port)});