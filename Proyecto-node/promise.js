// Leer un archivo asincrona

//const { readFile } = require('fs');

// //Promisify, ahorra todo este secmento de codigo
// function getText(pathFile) {
//     return new Promise(function (resolve, reject) {
//         readFile(pathFile, 'utf-8', (error, data) => {
//             if (error) {
//                 reject(error);
//                 return;
//             }

//             if (data) {
//                 resolve(data);
//             }

//         })
//     })
// }

// getText('./data/first.txt')
//     .then((result) => {
//         console.log(result)
//     })
//     .then(() => getText('./data/second.txt'))  //si todo fue correcto, lea el segundo archivo
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((error) => {
//         console.log(error)
//     })   //Si genero error

// async function readTextFile() {
//     try {
//         const result1 = await getText('./data/first.txt')
//         const result2 = await getText('./data/second.txt')
//         const result3 = await getText('./data/third1.txt')
//         console.log(result1);
//         console.log(result2);
//         console.log(result3);
//     } catch (error) {
//         throw  new Error('error al leer el archivo: ', error);
// //        console.log('error al leer el archivo: ', error);
//     }
// }

// readTextFile();

// const { readFile } = require('fs');
// const { promisify } = require('util')

// // Puedo leer un archivo basado en promesas
// const ReadFilePromisify = promisify(readFile);

// async function readTextFile() {
//     try {
//         const result1 = await ReadFilePromisify('./data/first.txt', 'utf-8')
//         const result2 = await ReadFilePromisify('./data/second.txt', 'utf-8')
//         const result3 = await ReadFilePromisify('./data/third.txt', 'utf-8')
//         console.log(result1);
//         console.log(result2);
//         console.log(result3);
//     } catch (error) {
//         // throw new Error('error al leer el archivo: ', error);
//                 console.log('error al leer el archivo: ', error);
//     }
// }

// readTextFile();

const { readFile,  } = require('fs/promises');

async function readTextFile() {
    try {
        const result1 = await readFile('./data/first.txt', 'utf-8')
        const result2 = await readFile('./data/second.txt', 'utf-8')
        const result3 = await readFile('./data/third.txt', 'utf-8')
        console.log(result1);
        console.log(result2);
        console.log(result3);
    } catch (error) {
        // throw new Error('error al leer el archivo: ', error);
                console.log('error al leer el archivo: ', error);
    }
}

readTextFile();