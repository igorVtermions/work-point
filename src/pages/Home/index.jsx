import './style.css'
import { Card } from "../../components/Card"
import React, {useState} from 'react'

export function Home(){
    const [devName, setDevName] = useState ('');
    const [dev, setDev] = useState([])

    function handleAddDev(){
        const newDev = {
            name: devName, 
            time: new Date().toLocaleTimeString("pt-br", {
                hour:'2-digit',
                minute:'2-digit',
                second:'2-digit',
            })
        }
        setDev(prevState => [...prevState, newDev])
    }

    return(
        <div className='mainContainer'>
            <section className='content'>
                <h1>Confirme sua presença</h1>
                <label htmlFor="input">Seu nome ou matricula</label>

                <input type="text" placeholder='digite seu nome aqui ...' onChange={e => setDevName(e.target.value)}/>

                <input type="button" value="Confirmar" className='btn' onClick={handleAddDev}/>
            
            </section>

                <div className='card'>
                        {
                            dev.map(devs => <Card key={devs.time} name={devs.name} time={devs.time}/>)
                        }
                </div>
        </div>
    )
}