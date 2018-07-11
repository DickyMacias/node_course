// Modulo 3 y 4 Curso NodeJS

var http = require("http"),
    //se llama la libreria de lectura de archivos
    fs = require("fs");

// se crea el servidor
http.createServer(function(req,res){
  // se indica al servidor que leera el index
  fs.readFile("./index.html", function(err,html){
    // se pasa como parametro el codigo de status y tipo de contenido
    res.writeHead(400,{"Content-Type":"application/json"});
    // se senala lo que se mandara imprimir
    // En este caso es un JSON, y se convierten los parametros en string
    res.write(JSON.stringify({nombre: "Dicky Macias", username:"dicky"}));
    res.end();
  });
}).listen(8080);
