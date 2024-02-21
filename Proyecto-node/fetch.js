// //URL jsonplaceholder que nos alimenta datos para probar
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))

async function loadData() {
    try {
        throw new Error('Error de prueba');
        const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await result.json()
        console.log(data)

    } catch (error) {
        console.log('Error al leer el archivo: ', error)
    }
}

loadData();