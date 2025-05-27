import Rooms from '../components/Rooms'
const roomsArr = [
    "Family",
    "Friend",
    "College",
    "School"
]

export default function RoomHome(){
    return(
        <div className="grid grid-cols-3 w-full">
            {
                roomsArr.map(item => <Rooms roomName={item}/>)
            }
        </div>
    )
}