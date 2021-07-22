const http = require("http");
const socketIo = require("socket.io");
const express = require("express");

const port = process.env.PORT || 4001;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New connection");
  socket.on("test", ({ userName, room }) => {
    console.log(userName);
    socket.join(room);
    socket.broadcast.to(room).emit("message", room);
    io.to(room).emit("message", "messages");
  });
});

server.listen(port, console.log(`server on port${port}`));
