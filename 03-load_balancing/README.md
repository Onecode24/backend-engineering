
# 03-Load_balancing

## Description
This is a simple load balancer app who balance each request to the server running according to algorithm you choice `least-connections` or `round-robin`. It is implemented using the `http-proxy` and `http` module of Node.

## How to run
1. Clone the repository
2. Navigate to the `02-web_server` directory
3. Run `yarn install` or `npm install`
4. In a file ``app.ts`` change the `loadBalancerAlgorithm` to `least-connections` or `round-robin`
5. Run `npx tsc *.ts` to compile the typescript files to javascript
6. Open 3 terminal windows and run `node server.js`, `node app.js` & `./test_load_balancing` in each of them

## How to use
1. Lanch the test script `./test_load_balancing` in a terminal

## Source
[Youtube](https://www.youtube.com/watch?v=2oZJSePTivY)