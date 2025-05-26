interface MessageType {
    className : string;
    message : string;
}
export default function Message( {className, message} : MessageType){

    return (
        <div className={`border-1 border-black rounded-[5px] w-3/4 p-2 mt-4 ${className}`}>
            <span className="">{message}</span>
        </div>
    )
}