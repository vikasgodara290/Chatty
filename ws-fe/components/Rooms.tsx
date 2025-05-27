import Button from '../components/Button'

interface RoomsType {
    roomName : string;
}

export default function Rooms({roomName}: RoomsType){
    return(
        <div className="grid grid-cols-1 rounded-[5px] border border-black w-11/12 open-sans-400 p-5 mx-auto mt-12">
            <span className='w-11/12 ' >{roomName}</span>
            <Button name='Join' className='w-11/12 my-2'/>
        </div>
    )
}