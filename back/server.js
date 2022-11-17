// const express = require('express')
// const app = express()
// const http = require('http')
// const server = http.createServer(app)
// const {Server} = require('socket.io')
// const io = new Server(server)

// io.on('connection', (socket)=>{
//     console.log('user Connected')
// })

// server.listen(3030,()=>{
//     console.log('listening on 3030')
// })

const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
    cors: {
      origins: ['http://localhost:4200']
    }
  })

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>')
})

io.on('connection', (socket) => {
    const user = socket.handshake.auth.userId
    console.log(`user ${user} connected`)

    socket.on('broadcastMsg',(msg)=>{
        console.log('new msg ',msg)
        socket.emit('incomingMsg',msg)
    })

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })

http.listen(3000, () => {
  console.log('listeninghttp on *:3000')
})
