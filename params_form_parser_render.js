// Modulo 7 Curso NodeJS

var http = require("http"),
  fs = require("fs"),
  // hacemos include del parser y del render
  parser = require("./params_parser");
  render = require("./render_view");

//llamamos la funcion desde parser o render y las almacenamos
var p = parser.parse;
var r = render.renderView;

http.createServer(function(req,res){

  if(req.url.indexOf("favicon.ico") > 0){return;}

  fs.readFile("./index.html", function(err,html){

    var parametros = p(req);

    res.writeHead(200,{"Content-Type":"text/html"});
    // llamamos el html y los parametros desde render
    res.write(r(html,parametros));
    res.end();
  });
}).listen(8080);