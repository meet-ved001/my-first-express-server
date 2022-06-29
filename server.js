const express = require("express");

const app = express();

app.get("/",function(req,res){
  res.send("<h1>Meet ved</h1>");
  console.log(req);
});
app.get("/contact",function(req,res){
  res.send("<h1>connect with msved19@gmail.com</h1>");
});

app.get("/about",function(req,res){
  res.send("<h1>Hello folks,i am meet ved here....the most humble and kind person i am in this cruel world</h1>");
});
app.get("/feel",function(req,res){
  res.send("<h1>feeling grateful</h1>");
});

app.listen(3000,function (){
  console.log("Open/listen port on 3000 ");
});
app.listen(3001,function (){
  console.log("Open/listen port on 3001 ");
});
