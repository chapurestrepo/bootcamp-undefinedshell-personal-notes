const http = require('http')

function serverCallback(request, response){
    response.writeHead(
        200,
        {
            'Content-Type': 'application/json'
        }
    )
    response.end(
        JSON.stringify({message: "Hola mundo del server con Node"})
    )
}

// Función callback que se ejecuta cuado llamamos a server
const server = http.createServer(serverCallback)

server.listen(
    3000,
    () => console.log('Esto se levanto en el http://localhost:3000')
)