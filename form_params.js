// Modulo 6 Curso NodeJS

var http = require("http"),
    fs = require("fs");

http.createServer(function(req,res){

    if(req.url.indexOf("favicon.ico") > 0){return;}

    fs.readFile("./index.html", function(err,html){
        var html_string = html.toString();
        //inicializamos un arreglo que contenga los parametros
        //inicializamos un hashmap que contenga los datos del arreglo independientes
        var arreglo_parametros = [], parametros = {};
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "";

        //condicionamos para localizar los parametros despues del dominio
        if (req.url.indexOf("?") > 0) {
            // /?nombre=Dicky
            //dividimos la url en dominio y parametros con ?
            var url_data = req.url.split("?");
            //dividimos los parametros entre si con &
            var arreglo_parametros = url_data[1].split("&");
            // [nombre=Dicky,data=algo]
        }

        for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
            var parametro = arreglo_parametros[i];
            // nombre=Dicky
            var param_data = parametro.split("=");
            // [nombre,Dicky]
            parametros[param_data[0]] = param_data[1];
            // {nombre: Dicky}
        };


        for (var i = variables.length - 1; i >= 0; i--) {
            //[nombre,apellido]
            var variable = variables[i];
            // parametros[variable]
            // parametros[nombre]

            //remplazamos el contenido por el valor de las variables dentro de parametros
            html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);
        };

        //mandamos el contenido al navegador
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(html_string);
        res.end();
    });
}).listen(8080);