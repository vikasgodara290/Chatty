import { useEffect, useState } from 'react'
import Rooms from '../components/Rooms'
import axios from 'axios';
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
const BACKEND_URL = 'http://localhost:3000';

interface RoomType {
    roomid : string;
    roomname : string;
    createdby : string;
    createdat : Date;
    members : string[]
}

export default function RoomHome(){
    const [rooms, setRooms] = useState<RoomType[]>([])
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/room`)
        .then(res => {
            setRooms(res.data);
        })
    },[]);

    const handleCreateNew = () => {
        navigate("/createroom")
    }

    return(
        <>  
            <div className="grid grid-cols-3 w-full">
                {
                    rooms.length > 0 && rooms.map(item => <Rooms key={item.roomid} roomid={item.roomid} roomName={item.roomname}/>)
                }
            </div>
            <Button name='Create New' className='w-1/4 my-2 mx-auto' onclick={handleCreateNew}/>
        </>
    )
}