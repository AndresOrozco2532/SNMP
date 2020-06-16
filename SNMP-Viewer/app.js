require('dotenv').config()
const express = require("express");
const io = require("socket.io");
const http = require("http");
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, "../src");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

server.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Servidor corriendo en puerto ${port}`);
});

var socket = io.connect(process.env.URLSOCKET, { 'forceNew': true });
socket.on('messages', function(data) {
    console.log(data);
});

