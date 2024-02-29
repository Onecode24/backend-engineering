import * as http from 'http'
// import * as config from './config.json'
const config = require('./config.json')

const createServer = (host: string, port: number, timeout: number = 0)=>{
    http.createServer((req,res)=>{
        setTimeout(()=>{
            res.writeHead(200,{'Content-Type':'text/plain'})
            res.end(`Server response from port ${port}\n`)
        }, timeout)
    })
    .listen(port,host, ()=>{
        console.log(`Server running at http://${host}:${port}/`)
    })
}

config.servers.forEach((server)=>{
    createServer(server.host, server.port)
})