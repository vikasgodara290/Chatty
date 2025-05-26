import { WebSocketServer, WebSocket } from "ws";
import express, { json } from "express";
import cors from "cors";
const wss = new WebSocketServer({ port: 8000 });
const app = express();
app.use(cors());
app.use(express.json());

interface UserType {
    userid : string;
    username : string;
}

interface RoomType {
    roomid : string;
    roomname : string;
    createdby : string;
    createdat : Date;
    members : string[]
}

interface UserSocketType {
    userid : string;
    roomid : string;
    socket : WebSocket;
}

const users : UserType[] = [
    {
        userid : '100',
        username : 'vikas'
    },
    {
        userid : '101',
        username : 'ajay'
    },
    {
        userid : '103',
        username : 'kailash'
    },
    {
        userid : '104',
        username : 'shyam'
    },
    {
        userid : '105',
        username : 'vikram'
    },
];

const rooms : RoomType[] = [
    {
        roomid : '1001',
        roomname : 'Study Group',
        createdby : '100',
        createdat : new Date(),
        members : ['100', '101']
    },
    {
        roomid : '1002',
        roomname : 'Gaming Squad',
        createdby : '101',
        createdat : new Date(),
        members : ['101', '103']
    },
    {
        roomid : '1003',
        roomname : 'Book Club',
        createdby : '104',
        createdat : new Date(),
        members : ['104', '105']
    },
    {
        roomid : '1004',
        roomname : 'Tech Talk',
        createdby : '105',
        createdat : new Date(),
        members : ['105', '100']
    }
]

const userSocket : UserSocketType[] = [];

// create user http post request
app.post("/api/user", (req, res) => {
    const { userid, username } = req.body;
    if (!userid || !username) {
        res.status(400).json({ message: "User ID and username are required." });
        return;
    }
    const existingUser = users.find(user => user.userid === userid);
    if (existingUser) {
        res.status(400).json({ message: "User already exists." });
        return;
    }
    const newUser: UserType = { userid, username };     
    users.push(newUser);
    res.status(201).json(newUser);
});

// create room http post request
app.post("/api/room", (req, res) => {
    const { roomid, roomname, createdby } = req.body;
    if (!roomid || !roomname || !createdby) {
        res.status(400).json({ message: "Room ID, room name, and creator ID are required." });
        return;
    }
    const existingRoom = rooms.find(room => room.roomid === roomid);
    if (existingRoom) {
        res.status(400).json({ message: "Room already exists." });
        return;
    }
    const newRoom: RoomType = {
        roomid,
        roomname,
        createdby,
        createdat: new Date(),
        members: [createdby]
    };
    rooms.push(newRoom);
    res.status(201).json(newRoom);
});
/*
{
    "type": "join",
    "payload" : {
        "roomid" : "1001",
        "userid" : "100"
    }
}

{
    "type" : "chat",
    "payload" : {
        "userid" : "100",
        "roomid" : "1001"
        "message" : "hi I am new in this group"
    }
}
*/
wss.on("connection", function (socket) {
    const isUserExist = users.find((item) => item.userid === req.headers.userid!.toString());
    
    if(isUserExist){
        const isUserAlreadyConnected = userSocket.find((item) => item.userid === req.headers.userid!.toString() && item.roomid === req.headers.roomid!.toString());
        if(!isUserAlreadyConnected){
            userSocket.push({
                userid : req.headers.userid!.toString(),
                roomid : req.headers.roomid!.toString(),
                socket : socket
            })
        }
    }
    else{
        return;
    }

    socket.on("message", (e) => {
        const reqData = JSON.parse(e.toString());

        //user want to join the group
        
        const userInRoom = userSocket.filter(item => item.roomid === req.headers.roomid!.toString())
        userInRoom.forEach(u => u.socket.send(e.toString()));
    });
});
