import { useState } from 'react';
import './Lottery.css';
import { genTicket,sum } from './helper';
import Ticket from './Ticket';



export default function Lottery({n,winningCond}) {
    let [ticket,setticket] = useState(genTicket(n));
    let isWinning = winningCond(ticket);

    let buyTicket = () =>{
        setticket(genTicket(n));
    }
    return (
        <div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket} />
        <br />
        <button onClick={buyTicket} className='bt'>Buy New Ticket</button>
        <h3 className='won'>{isWinning && "Congratulation, you won!"}</h3>
        </div>
    )
}