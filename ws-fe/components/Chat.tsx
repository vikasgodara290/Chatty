
interface ChatType {
    className : string;
    children : React.ReactNode;
}
export default function Chat( { className, children } : ChatType) {

    return(
        <div className={`${className}`}>
            {children}
        </div>
    )
}