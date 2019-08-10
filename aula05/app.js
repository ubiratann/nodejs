//criando server http no node

var http = require('http') //importando modulo http

http.createServer(function(req,res){
  res.end("Hello")//mensagem pro browser mostrar
}).listen(8081)//porta que o servidor vai ser aberto

console.log("The server is up!");//mensagem de confirmação no console
