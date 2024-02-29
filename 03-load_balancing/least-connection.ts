import * as httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer({});

let current = 0;

const leastConnection = (servers: any[], req: any, res: any) => {
    servers.sort((a, b) => a.connections - b.connections);

    const target = servers[0];
    target.connections++;
    console.log(` ${target.host}:${target.port} has ${target.connections} connections \n`);

    proxy.web(req, res, { target: `http://${target.host}:${target.port}` });

    res.on('finish', ()=>{
        target.connections--;
    })
    
}

export default leastConnection;
