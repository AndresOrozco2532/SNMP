require("dotenv").config();
const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const publicPath = path.resolve(__dirname, "./src");
app.use(express.static(publicPath));

let server = http.createServer(app);

let io = socketIo(server);

const port = process.env.PORT || 3000;
server.listen(port, (err) => {
	if (err) throw new Error(err);
	console.log(`Client port ${port}`);
});
