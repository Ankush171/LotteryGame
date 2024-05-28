import Ticketnum from "./Ticketnum"
import './Ticket.css';

export default function Ticket({ticket}){
    return (
        <div className="Ticket">
            <p className="th">Ticket</p>
            {/* <Ticketnum num = {ticket[0]}/> // this will also hard coding */}
            {ticket.map((num,idx) => (
                <Ticketnum num={num} key={idx}/>
            ))}
        </div>
    )
}