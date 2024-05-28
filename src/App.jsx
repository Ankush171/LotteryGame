import './App.css'
import Lottery from './component/Lottery';
import TodoList from './component/TodoList';
// import Ticketnum from './component/Ticketnum';
// import Ticket from './component/Ticket';

function App() {
  // let winningCond = (ticket)=>{
  //   return ticket[0]===0;
  // }
  // we pass funcrtion as a prop ;
  return (
  // <>
  // {/* <Ticketnum num={5} />
  // <Ticketnum num={4} />
  // <Ticketnum num={3} /> */}
  // {/* <Ticket  ticket={[0,2,1]}/>
  // <Ticket  ticket={[0,2,1,5,8]}/> */}
  // <Lottery n={4} winningCond = {winningCond}  />
  // </>
  <TodoList/>
  );
}
export default App;