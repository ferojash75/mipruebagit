console.clear()

// const http = require('http')

// const server = http.createServer((peticion, respuesta) => {
//     respuesta.end('Hola mundo')
// })

// const conectarServidor = server.listen(3500, () => {
//     console.log(`Servidor http listo y escuchando en el puerto ${conectarServidor.address().port}`)
// })


const express = require('express')
const path = require('path')

const dotenv = require('dotenv')
dotenv.config()

const miApp = express()

global._basedir = __dirname

//miApp.use(express.static(path.join(__dirname, 'public')))
miApp.use(express.static('public'))

miApp.use(express.json())
miApp.use(cors())

//const puerto = 3500
const puerto = process.env.PUERTO

const server = miApp.listen(puerto, () => {
    console.log(`Servidor listo y escuchando por el puerto http://localhost:${puerto}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

miApp.get('/', (req, resp) => {
    //resp.json({mensaje: 'Hola mundo'})
    //resp.sendFile(path.join(__dirname, 'public', 'index.html'))
    resp.sendFile(path.join(global._basedir, 'index.html'))
})


