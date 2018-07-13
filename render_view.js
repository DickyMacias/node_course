function renderView(html,parametros) {
  var html_string = html.toString();
  var variables = html_string.match(/[^\{\}]+(?=\})/g);
  var nombre = "";

  for (var i = variables.length - 1; i >= 0; i--) {
      //[nombre,apellido]
      var variable = variables[i];
      // parametros[variable]
      // parametros[nombre]
      html_string = html_string.replace("{"+variables[i]+"}",parametros[variable]);
  };// Se llama los parametros desde el parser
  return html_string;
}

module.exports.renderView = renderView;