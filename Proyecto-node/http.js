
const http = require('http')
// se crea el servidor y siempre esta escuchando y tomando peticiones, en el puerto 8080
http.createServer(function (request, response) {

    // console.log(request.url)
    if (request.url == '/') {
        response.write('Welcome to te server')
        return response.end()
    } 

    if (request.url == '/profile') {
        response.write('Perfil del Consultor')
        return response.end()
    } 

    response.write('Respuesta del servidor');
    response.end(); 
}).listen(8080);
console.log('Servidor activo en puerto 8080');
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: ' + add);
  })


