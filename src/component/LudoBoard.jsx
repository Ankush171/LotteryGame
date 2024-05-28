import { useState } from "react"


export default function LudoBoard(){
    let [moves,setmoves] = useState({red:0,yellow:0,green:0,blue:0});
    let [arr,setarr] = useState(["noMoves"]); // push element in Array ...
    let updateBlue = ()=> {
        
        // // setmoves({...moves},moves.blue+=1);
        // setmoves((prevmoves) => {
        //     return {...prevmoves,blue:prevmoves.blue+1};
        // })
        // setarr([...arr,"Blue Moves"]);
        setarr((prevmoves) => {
            return [...arr,"Blue Moves"];
        })
    }
    let updateYellow = ()=> {
        setmoves((prevmoves) => {
            return {...prevmoves,yellow:prevmoves.yellow+1};
        })
    }
    let updateGreen = ()=> {
        setmoves((prevmoves) => {
            return {...prevmoves,green:prevmoves.green+1};
        })
    }
    let updateRed = ()=> {
        setmoves((prevmoves) => {
            return {...prevmoves,red:prevmoves.red+1};
        })
    }

    return (
        <div>
            <p>Game Begins!</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue Moves = {moves.blue} </p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow} </p>
                <button style={{backgroundColor: "yellow",color: "black"}} onClick={updateYellow}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}