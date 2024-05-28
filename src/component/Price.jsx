import './Price.css';

export default function Price({oldPrice,newPrice}){
    return (
        <div className='Price'>
            <p className='oldPrice'>{oldPrice}</p>
            <p className='newPrice'>{newPrice}</p>
        </div>
    )
}
