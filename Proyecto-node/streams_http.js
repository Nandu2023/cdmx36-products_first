const http = require('http')
//Esta instruccion llama todo el modulo
//const fs = require('fs')
//para llamar solo una funcion del modulo fs le damos
const {createReadStream}= require('fs')
// al ser una funcion la podemos asignar a una const

const server = http.createServer((request, response) => {
     const fileStream = createReadStream('./data/bigfile.txt', {
        encoding: 'utf-8'
     })

     //Cuando este leyendo el dato
     fileStream.on('data', (chunk) => {
        // pasar el objeto a otra funcion, en este caso response
        fileStream.pipe(response);
     })
     fileStream.on('error', error => {
         console.log('Error al leer ', error)
     })
})

server.listen(8080);
console.log('Server listening, port 8080');