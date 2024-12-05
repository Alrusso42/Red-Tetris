const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

server.listen(4000, function(){
    console.log('Server running on 4000')
})