console.clear()

// const http = require('http')

// const server = http.createServer((peticion, respuesta) => {
//     respuesta.end('Hola mundo')
// })

// const conectarServidor = server.listen(3500, () => {
//     console.log(`Servidor http listo y escuchando en el puerto ${conectarServidor.address().port}`)
// })

const express = require('express')
//const path = require('path')

const miApp = express()

//miApp.use(express.static(path.join(__dirname, 'public')))
//miApp.use(express.static('public'))

const puerto = 3500

const server = miApp.listen(puerto, () => {
    console.log(`Servidor listo y escuchando por el puerto http://localhost:${puerto}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

miApp.get('/', (req, resp) => {
    resp.json({mensaje: 'Hola mundo'})
    //res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


