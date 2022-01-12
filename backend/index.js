const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("hello", () => {
    // console.log(socket.id);
    console.log(`${socket.id} said hello`);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
