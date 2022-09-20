import './style.css'

export function Card({name, time}){
    return(
        <div className='contentCard'>
            <strong>{name}</strong>
            <p>{time}</p>
        </div>
    )
}