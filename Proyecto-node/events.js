const EvenEmitter = require('events')

const customEmitter = new EvenEmitter()

customEmitter.on('response', (data) => {
    console.log('Recibido');
    console.log(data);
})

customEmitter.emit('response', 'Hello pueblo');
customEmitter.emit('response', 30);
customEmitter.emit('response', [1, 2, 3] );
customEmitter.emit('response', {name: 'Nandu'});