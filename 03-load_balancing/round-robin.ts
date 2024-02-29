import * as httpProxy from 'http-proxy'

const proxy = httpProxy.createProxyServer({});

let current = 0;

const roundRobin = (servers: any[], req: any, res: any) => {
    const target = servers[current];
    console.log(` ${target.host}:${target.port} \n`);

    current = (current + 1) % servers.length;
    proxy.web(req, res, { target: `http://${target.host}:${target.port}` });
    
}

export default roundRobin;