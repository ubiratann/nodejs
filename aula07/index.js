const express = require("express")
const app = express()


app.get("/", function(req,res){
  res.send("Hello World!!")
})


app.get("/about",function(req, res){
  res.send("My page about")
})


app.get("/blog",function(req, res){
  res.send("Wellcome to my blog :)")
})

app.listen(8081, function(){
  console.log("Server up in: http://localhost:8081");
}) //listen tem que ser a ultima linha de codigo
