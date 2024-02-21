// const { writeFile } = require('fs/promises')

// const createBigFile = async () => {
//     await writeFile('./data/bigfile.txt', 'hello pueblo'.repeat(100000))
// }

// createBigFile();

// Creado basado en eventos
const { createReadStream } = require('fs')

const stream = createReadStream('./data/bigfile.txt', 'utf-8')

// cuando recibas los datos 'data' y la porcion de datos
stream.on('data', (chunk) => {
    console.log(chunk);
})

stream.on('close', () => {
    console.log('Se termino de mostrar todo el archivo...')
})

stream.on('error', (error) => {
    console.log('Error en archivo', error)
})