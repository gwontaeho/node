const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const port = 3002;

const io = new Server(httpServer, {
    cors: { origin: "*" },
});

io.on("connection", (socket) => {
    console.log("connected");

    socket.on("disconnect", (reason) => {
        console.log("disconnected");
    });

    socket.on("test", (data) => {
        console.log(data);
        socket.emit("test2", { b: "b" });
    });
});

io.listen(port);
