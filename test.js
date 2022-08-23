const express = require("express");
const app = express();
const port = 3000;
let http = require('http')
const cors = require('cors')
const mongoose = require('mongoose')
let server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => res.json("GET"));
app.post("/", (req, res) => res.send("POST"));
app.get("/home", (req, res) => res.send("GET HOME"));
app.post("/home", (req, res) => res.send("POST HOME"));
app.get("/about", (req, res) => res.send("GET HOME"));
app.post("/about", (req, res) => res.send("POST HOME"));

app.get("/check",(req,res)=> {
    // return res.json('app started')
    console.log('hello')
  })

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);