export default function Button({name, onClick, type}){
    return(
        <button onClick={onClick} type={type}>{name}</button>
    )
} 