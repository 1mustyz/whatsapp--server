const express = require("express")
let http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3001
const app = express()
let server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);
const router = express.Router();

app.use(express.json())
app.use(cors())

let clients = {}

io.on('connection', (socket) => {
    console.log('a user connected');
    console.log(socket.id);

    socket.on("signin", (id)=>{
        console.log(id)
        clients[id] = socket
    })

    socket.on('message', (msg)=>{
        console.log(msg)
        let targetId = msg.targetId
        if(clients[targetId]) clients[targetId].emit('message',msg)

    })


  });
  // console.log(router)

  app.get("/check",(req,res)=> {
    return res.json('app started')
  })

app.listen(port,'0.0.0.0' ,()=>{
    console.log("server started")
})