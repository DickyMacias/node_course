// Modulo 7 Curso NodeJS

var http = require("http"),
  fs = require("fs"),
  // hacemos include del parser y del render
  parser = require("./params_parser.js");

//llamamos la funcion desde parser o render y las almacenamos
var p = parser.parse;

http.createServer(function(req,res){

  if(req.url.indexOf("favicon.ico") > 0){return;}

  fs.readFile("./index.html", function(err,html){
    var html_string = html.toString();
    var variables = html_string.match(/[^\{\}]+(?=\})/g);
    var nombre = "";

    var parametros = p(req);

    for (var i = variables.length - 1; i >= 0; i--) {
      //[nombre,apellido]
      var variable = variables[i];
      // parametros[variable]
      // parametros[nombre]
      html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);
    };// Se llama los parametros desde el parser
    res.writeHead(200,{"Content-Type":"text/html"});
    // llamamos el html y los parametros desde render
    res.write(html_string);
    res.end();
  });
}).listen(8080);