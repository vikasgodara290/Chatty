
interface ButtonType {
    name : string;
    className : string;
}
export default function Button({ name, className } : ButtonType) {
    return (
    <div className={`h-10 border-1 border-black flex items-center justify-center
        rounded-[5px] text-[22px] ${className}`}>
        <button className="hover:cursor-pointer">{name}</button>
    </div>
    )
}