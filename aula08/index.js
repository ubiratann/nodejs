const express = require("express")
const app = express()

//criando rotas
app.get("/", function(req,res){
  res.send("Hello World!!")
})

app.get("/about",function(req, res){
  res.send("My page about")
})

app.get("/blog",function(req, res){
  res.send("Wellcome to my blog :)")
})


//criando rota que recebe parametros
app.get("/hello/:name/:office/:color", function(req,res){
  //res.send("Hello")
  //so pode ser feito um send() dentro de um função
  res.send("<h1>Hello, " + req.params['name'] + "!</h1>" + "<h2> Your office is: " + req.params['office'] + "</h2>"+"<h3> Your color is: " + req.params['color'] + "</h3>")
})

//fim da criacao de rotas
app.listen(8081, function(){
  console.log("Server up in: http://localhost:8081");
}) //listen tem que ser a ultima linha de codigo
