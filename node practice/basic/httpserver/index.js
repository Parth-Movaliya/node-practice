const http = require('http')

const server = http.createServer((req,res) => {
    // console.log(req.url)
    if(req.url == "/")
    {
        res.end("you are in home side")
    }
    else if(req.url == "/about")
    {
        res.end('you are in about side')
    }
    else if(req.url == "/contact")
    {
        res.end('you are in contact side')
    }
    // res.end('hello from the other side')
})

server.listen(8000,"127.0.0.1", () => {
    console.log("you are in port no. 8000")
})