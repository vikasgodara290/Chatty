import Button from '../components/Button'
export default function CreateRoom (){
    return(
        <div className="grid grid-cols-1 rounded-[5px] border border-black w-1/2 open-sans-400 p-5 mx-auto mt-24">
            <label htmlFor="">
                Room Name
                <input type="text" className='border border-black rounded-[5px] w-11/12 '/>
            </label>
            <Button name='Create' className='w-11/12 my-2'/>
        </div>
    )
}