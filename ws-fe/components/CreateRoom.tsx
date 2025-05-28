import axios from 'axios'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4} from 'uuid';
import { useRef } from 'react';
const BACKEND_URL = 'http://localhost:3000';

export default function CreateRoom (){
    const roomNameRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate();
    const handleCreateRoom = () => {
        axios.post(`${BACKEND_URL}/api/room`, {
            roomid : uuidv4(),
            roomname : roomNameRef.current!.value,
            createdby : localStorage.getItem("userid")
        })
        .then(res => {
            console.log(res.data);
            navigate("/rooms")
        })
    }

    return(
        <div className="grid grid-cols-1 rounded-[5px] border border-black w-1/2 open-sans-400 p-5 mx-auto mt-24">
            <label htmlFor="">
                Room Name
                <input ref={roomNameRef} type="text" className='border border-black rounded-[5px] w-11/12 '/>
            </label>
            <Button name='Create' className='w-11/12 my-2' onclick={handleCreateRoom}/>
        </div>
    )
}