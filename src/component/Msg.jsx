import './Msg.css';
 
function Msg({userName,textColor}){
    let styles = {color: textColor};
    return (
        <div style={styles}>
            <h1>Hello, {userName}</h1>
        </div>
    )
}
export default Msg;