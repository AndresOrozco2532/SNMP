const { io } = require("../server");
const fs = require("fs");
var filePath =
  "C:\\Users\\LENOVO\\Documents\\Politecnico Gran Colombiano\\1 Semeter\\Telecomunicaciones\\Project\\dataServer\\data.json";

io.on("connection", (clientInfo) => {
  var file = fs.readFile(filePath, "utf8", (err, data) => {
    // console.log(data);
  });
  // console.log("Initial content ", file);
  fs.watchFile(filePath, (curr, prev) => {
    file = fs.readFile(filePath, "utf8", (err, data) => {
      // console.log(data);
      clientInfo.emit("file:change", data);
    });
  });
});
