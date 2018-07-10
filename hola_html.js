var http = require("http"),
    fs = require("fs");

http.createServer(function(req,res){
  fs.readFile("./index.html", function(err,html){
    res.writeHead(400,{"Content-Type":"application/json"});
    res.write(JSON.stringify({nombre: "Dicky Macias", username:"dicky"}));
    res.end();
  });
}).listen(8080);
