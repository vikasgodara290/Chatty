
interface ButtonType {
    name : string;
    className : string;
    onclick? : () => void;
}
export default function Button({ name, className, onclick } : ButtonType) {
    return (
    <div className={`h-10 border-1 border-black flex items-center justify-center
        rounded-[5px] text-[22px] ${className}`}>
        <button className="hover:cursor-pointer w-full" onClick={onclick}>{name}</button>
    </div>
    )
}