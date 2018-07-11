// Modulo 7 Curso NodeJS

//Se crea funcion y se llama el parametro de la peticion
function parse(req) {
  //ponemos la inicializacion de los arreglos
  var arreglo_parametros = [], parametros = {};

  // traemos la condicion para la url
  if (req.url.indexOf("?") > 0){
  // /?nombre=Dicky
  var url_data = req.url.split("?");
  var arreglo_parametros = url_data[1].split("&");
  // [nombre=Dicky,data=algo]
  }

  // incluimos el ciclo for para lectura
  for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
    var parametro = arreglo_parametros[i];
    // nombre=Dicky
    var param_data = parametro.split("=");
    // [nombre,Dicky]
    parametros[param_data[0]] = param_data[1];
    // {nombre: Dicky}
  };

  return parametros;
}

module.exports.parse = parse;