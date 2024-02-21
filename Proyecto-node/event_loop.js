
// console.log('one')  // se ejecuta esta rutina 1
// setTimeout(() => {      // delega esta rutina a otro proceso x q es una funcion
//     console.log('two')
// }, 0
// )
// console.log('three') // se ejecuta esta rutina 1

// // al ejecutar vemos: esto es por que al delegar se demora en ejecutar la funcion
// // one
// // three
// // two

const { response } = require('express');
const http = require('http');

const server = (http.createServer((request, response) => {
    if (request.url == '/') {
        response.write('Welcome to the server');
        return response.end();
    }

    if (request.url == '/about') {
        // response.write('Welcome to about...');

        //  Es una tarea demorada que debe realizar
        //  por lo que bloquea todo lo demas
        // for (let index = 0; index < 1000000; index++) {
        //     console.log(Math.random() * index);

        // }

        return response.end('Welcome to about...');
    }

    response.end('Page no found');
}));

server.listen(8080);
console.log('Server in port: 8080');