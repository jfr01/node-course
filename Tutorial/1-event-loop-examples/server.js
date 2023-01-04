const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')

    res.end('Hello world')
})

server.listen(5557, () => { // .listen is aschrynous so it will keep alive
    console.log('server listening on port: 5557... ')
})

