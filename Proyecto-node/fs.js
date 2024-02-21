// const { isUtf8 } = require('node:buffer');
// const fs = require('node:fs');
// const path = require('node:path');
// const file1 = fs.readFileSync('./data/first.txt', 'utf-8');
// console.log(file1)
// const file2 = fs.readFileSync('./data/second.txt');
// console.log(file2.toString())
const { error } = require('node:console');
const fs = require('node:fs');
const path = require('node:path');
// fs.writeFileSync('./data/third.txt', 'estoy creando el tercer archivo')
// const file3 = fs.readFileSync('./data/third.txt');
// // console.log(file3.toString())

// const agregarTexto = ' y se agrega nando ramirez 312402'

// fs.writeFileSync('./data/fourth.txt', agregarTexto, {
//     flag: 'a'
// })
// const file4 = fs.readFileSync('./data/fourth.txt');
// console.log(file4.toString())

fs.readFile('./data/third.txt', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data.toString())
    }
}
)
