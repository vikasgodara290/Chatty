import { useRef } from 'react'
import Button from '../components/Button'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

const BACKEND_URL = 'http://localhost:3000';

export default function Login() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const handleOnLogin = () => {
        const username = usernameRef.current;
        const userid = uuidv4();

        // post the user to back end
        axios.post(`${BACKEND_URL}/api/user`, {
            userid: userid,
            username: username?.value
        }).then((response) => {
            console.log(response.data);
            return response.data;
        }).catch((error) => {
            console.error("There was an error creating the user!", error);
            return null;
        });

        
    }

    return (
        <div className="grid grid-cols-1 rounded-[5px] border border-black w-1/2 open-sans-400 p-5 mx-auto mt-24">
            <label htmlFor="">
                Username
                <input ref={usernameRef} type="text" className='border border-black rounded-[5px] w-11/12 '/>
            </label>
            <Button name='Login' className='w-11/12 my-2' onclick={handleOnLogin}/>
        </div>
    )
}
