import MsgArea from '../components/MsgArea'
import Button from '../components/Button'
import Chat from '../components/Chat'
import Message from '../components/Message'
import { useEffect } from 'react'

const msgArr = [
  {
    msg : 'hi vikas',
    userId : 'asd234lkjj232lk43lk2',
    roomId : '12339023'
  },
  {
    msg : 'hi bro',
    userId : 'asd234lkjj232lk43lk3',
    roomId : '12339023'
  },
  {
    msg : 'hi bro',
    userId : 'asd234lkjj232lk43lk3',
    roomId : '12339023'
  },
  {
    msg : 'hi bro, how are you doing. lets go to party tonight. are you up?',
    userId : 'asd234lkjj232lk43lk3',
    roomId : '12339023'
  }
]

export default function Home() {


    return <div className="open-sans-400">
      <Chat className='w-11/12 border-2 border-black rounded-[8px] mx-auto mt-24 p-4'>
          { msgArr &&
            msgArr.map((item) => {
              return <Message className='ml-2' message={item.msg}/>
            })
          }
          <div className="flex p-2 justify-center">
            <MsgArea className='w-3/4'/>
            <Button name="Send" className='ml-2 w-1/4'/>     
          </div>
      </Chat>
    </div>;
}