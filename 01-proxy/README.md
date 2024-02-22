
# 01-Proxy

## Description
This is a simple proxy server that forwards requests to a target server. It is implemented using the `net` module of Node.

## How to run
1. Clone the repository
2. Navigate to the `01-proxy` directory
3. Run `yarn install` or `npm install`
4. Run `node server.ts`

## How to use
1. Open a browser and go to setting > network > proxy settings and set the proxy to `localhost:8000`
2. Open a new tab and go to `the target server` (e.g. `http://www.google.com`) and you should see the request being logged in the terminal where the proxy server is running.

## Source
[Node.js net module](https://nodejs.org/api/net.html)
[Node.js stream module](https://nodejs.org/api/stream.html)
[blog](https://plainenglish.io/blog/build-your-own-forward-and-reverse-proxy-server-using-node-js-from-scratch-eaa0f8d69e1f)