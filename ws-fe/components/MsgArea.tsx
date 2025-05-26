interface MsgAreaType {
    className : string;
}
export default function MsgArea({ className }: MsgAreaType) {
    return (
        <div className={`h-10 ${className}`}>
            <textarea
                name="msgArea"
                id=""
                className={`outline-0 border-1 resize-none
                border-black w-full h-10 p-1 rounded-[5px]`}
                placeholder="Type your message..."
            ></textarea>
        </div>
    );
}
