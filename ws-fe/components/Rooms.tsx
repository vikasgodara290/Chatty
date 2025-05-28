import { useRef } from 'react';
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';

interface RoomsType {
    roomName : string;
    roomid : string;
}

export default function Rooms({roomName, roomid}: RoomsType){
    const roomNameRef = useRef<HTMLSpanElement>(null);
    const navigate = useNavigate();

    const handleJoinRoom = () => {
        const userid = localStorage.getItem("userid");

        const ws = new WebSocket(`ws://localhost:8000/`);
        
        ws.onopen = () => {
            ws.send(JSON.stringify({
                type : "join",
                payload : {
                    roomid : roomid,
                    userid : userid
                }
            }))
        }

        navigate("/chat")
    }

    return(
        <div className="grid grid-cols-1 rounded-[5px] border border-black w-11/12 open-sans-400 p-5 mx-auto mt-12">
            <span className='w-11/12 ' ref={roomNameRef}>{roomName}</span>
            <Button name='Join' className='w-11/12 my-2' onclick={handleJoinRoom}/>
        </div>
    )
}