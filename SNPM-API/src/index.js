import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import http from 'http';
import socketIo from 'socket.io';
import fa from 'fs';

import models from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var server = http.Server(app);
var io = socketIo(server);

// * Routes * //

app.use('/', routes.snmp);

// * Start * //

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);

io.on('connection', function(socket) {
  console.log('Un cliente se ha conectado');
  fs.watchFile(process.env.FILEPATH, (curr, prev) => {
    var file = fs.readFile(process.env.FILEPATH, "utf8", (err, data) => {
      // console.log(data);
      clientInfo.emit("file:change", data);
    });
  });
});