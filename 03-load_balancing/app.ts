import * as http from 'http'
// import * as config from './config.json'
const config = require('./config.json')
import roundRobin from './round-robin'
import leastConnection from './least-connection'

const servers = config.servers.map(server => ({
    ...server,
    connections: 0
}))

const loadBalancerAlgorithm: string = 'least-connections'

const server = http.createServer((req, res) => {
    if(loadBalancerAlgorithm == 'round-robin'){
        roundRobin(servers, req, res)
    } else if(loadBalancerAlgorithm == 'least-connections'){
        leastConnection(servers, req, res)
    }
    else {
        res.writeHead(500, {'Content-Type': 'text/plain'})
        res.end('Load balancer algorithm not supported')
    }
})

server.listen(3000, ()=>{
    console.log('Load balancer running at http://localhost:3000/') 
})