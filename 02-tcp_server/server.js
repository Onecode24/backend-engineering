"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
// const net = require('net')
var server = net.createServer();
server.on('connection', function (socket) {
    console.log('New connection ', socket.remoteAddress, socket.remotePort);
    socket.on('data', function (data) {
        console.log('Data received: ', data);
        socket.write(data);
        if (data.includes('q')) {
            console.log('Closing connection');
            socket.end();
        }
    });
    socket.on('end', function () {
        console.log('Connection ended');
    });
    socket.on('error', function (error) {
        console.log('Error: ', error);
    });
});
server.on('error', function (error) {
    console.log('Error: ', error);
    throw error;
});
server.listen({
    host: 'localhost',
    port: 3000
});
