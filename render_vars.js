// Modulo 5 Curso NodeJS

var http = require("http"),
    fs = require("fs");

http.createServer(function(req,res){

    fs.readFile("./index.html", function(err,html){
        //enviamos informacion de html como string 
        //o no envia por ser booleano readFile
        var html_string = html.toString();
        
        //expresion regular que busca en el HTML donde haya {x}
        var variables = html_string.match(/[^\{\}]+(?=\})/g); 
        var nombre = "Dicky";
        
        // variable ['nombre'];
        for (var i = variables.length - 1; i >= 0; i--) {
            //lo ejecutamos como codigo de JS
            //para obtener el valor de la variable
            var value = eval(variables[i]);

            //Reemplazamos el contenido con llaves {x} por su valor correspondiente
            html_string = html_string.replace("{"+variables[i]+"}",value);
        };

        //mandamos el contenido al navegador
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);
        res.end();
    });
}).listen(8080);