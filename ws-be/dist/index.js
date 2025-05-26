"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
const users = [
    {
        userid: '100',
        roomid: ['1000', '1001']
    },
    {
        userid: '101',
        roomid: ['1000']
    },
    {
        userid: '103',
        roomid: ['1000']
    },
    {
        userid: '104',
        roomid: ['1001']
    },
    {
        userid: '105',
        roomid: ['1001']
    },
];
const userSocket = [];
wss.on("connection", function (socket, req) {
    const isUserExist = users.find((item) => item.userid === req.headers.userid.toString());
    if (isUserExist) {
        const isUserAlreadyConnected = userSocket.find((item) => item.userid === req.headers.userid.toString() && item.roomid === req.headers.roomid.toString());
        if (!isUserAlreadyConnected) {
            userSocket.push({
                userid: req.headers.userid.toString(),
                roomid: req.headers.roomid.toString(),
                socket: socket
            });
        }
    }
    else {
        return;
    }
    socket.on("message", (e) => {
        const userInRoom = userSocket.filter(item => item.roomid === req.headers.roomid.toString());
        userInRoom.forEach(u => u.socket.send(e.toString()));
    });
});
