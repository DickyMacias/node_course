// Modulo 2 Curso NodeJS

//llamamos metodo http como libreria. Es un include
var http = require('http');

//se crea funcion que tiene una peticion y una respuesta
var manejador = function(solicitud, respuesta) {
    //se regresa la respuesta a la consola
    console.log("Hola mundo");
    //se termina respuesta para cerrar conexion
    respuesta.end();
};
//se crea el servidor con la funcion como parametro
var servidor = http.createServer(manejador);
//se pone un listener en el puerto que se vaya a utilizar para el servidor
servidor.listen(8080);
