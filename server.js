import http from 'http'

const server = http.createServer((req, res) => { 
    res.writeHead(200, {
        "content-type" : "text/plan"
    })  
    res.end("Serivodr rodando")
})

server.listen(3000, () => {
    console.log("servidor rodando")
})