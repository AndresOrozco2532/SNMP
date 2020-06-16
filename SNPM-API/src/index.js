import 'dotenv/config';
import express from 'express';
import socketIo from 'socket.io';
import routes from './routes';
import fs from 'fs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes.snmp);

var server = app.listen(process.env.PORT, () =>
  console.log(`Api port ${process.env.PORT}`),
);

var io = socketIo.listen(server);

io.on('connection', function (socket) {
  console.log('Un cliente se ha conectado');
  fs.watchFile(process.env.FILEPATH, (curr, prev) => {
    var file = fs.readFile(
      process.env.FILEPATH,
      'utf8',
      (err, data) => {
        socket.emit('file:change', data);
      },
    );
  });
});
