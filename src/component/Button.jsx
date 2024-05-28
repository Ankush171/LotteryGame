import './Button.css';

function handleHover(){
    console.log("Hover");
}

function handledblclicked(){
    console.log("Double Clicked");
}
export default function Button(){
    return(
        <div>
            <button onDoubleClick={handledblclicked}>Click me!</button>
            <p onMouseMove={handleHover}>Ankush Kumar</p>
        </div>
    );
}