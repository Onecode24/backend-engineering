const net = require('net');
// import net from 'node:net';


const server = net.createServer()

server.on('connection', (clientToProxySocket)=>{
    console.log('Client connected to the server');
    clientToProxySocket.on('data', (data)=>{
        const isTLSConnection = data.toString().indexOf('CONNECT') !== -1;
        let serverPort = 80;
        let serverAddress;

        if(isTLSConnection){
            serverPort = 443;
            serverAddress = data
            .toString()
            .split('CONNECT ')[1]
            .split(' ')[0]
            .split(':')[0];
        }else{
            serverAddress = data.toString().split('Host: ')[0].split('\n')[0];
        }

        let proxyToServerSocket = net.createConnection(
            {
                host: serverAddress,
                port: serverPort
            },
            ()=>{
                console.log('PROXY TO SERVER');
            }
        );

        if(isTLSConnection){
            clientToProxySocket.write('HTTP/1.1 200 OK\r\n\n');
        }else{
            proxyToServerSocket.write(data);
        }

        clientToProxySocket.pipe(proxyToServerSocket);
        proxyToServerSocket.pipe(clientToProxySocket);

        proxyToServerSocket.on('error', (err)=>{
            console.log('PROXY TO SERVER ERROR', err.toString());
        });
        clientToProxySocket.on('error', (err)=>{
            console.log('CLIENT TO PROXY ERROR', err.toString());
        });

    })
});

server.on('error', (err)=>{
    console.log('Some error occurred in the server', err);
})

server.on('close', ()=>{
    console.log('Server is closed');
})

server.listen({
    host: '0.0.0.0',
    port : 8080,
},
    () => {
        console.log('Server is listening on 0.0.0.0:8080')
    }
)
