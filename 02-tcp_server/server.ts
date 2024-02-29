import * as net from 'net'
// const net = require('net')

let server = net.createServer()

server.on('connection',(socket: net.Socket)=>{
    console.log('New connection ', socket.remoteAddress, socket.remotePort);
    socket.on('data', (data: Buffer)=>{
        console.log('Data received: ', data);
        socket.write(data)

        if(data.includes('q')){
            console.log('Closing connection');
            socket.end()
        }
    })
    socket.on('end', ()=>{
        console.log('Connection ended');
    })
    socket.on('error', (error: Error)=>{
        console.log('Error: ', error);
    })
})

server.on('error', (error: Error)=>{
    console.log('Error: ', error);
    throw error
});


server.listen({
    host: 'localhost',
    port: 3000
})

