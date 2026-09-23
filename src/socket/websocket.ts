import { WebSocketServer } from "ws";

const wss = new WebSocketServer({
  port: 8080
});

console.log("WebSocket server running on port 8080");

wss.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("message", (message) => {
    const data = String(message)
    const text = JSON.parse(data);

    console.log("Received:", text);//can also access as text.type;

    socket.send(`Server received: ${JSON.stringify(text)}`);
  });
});