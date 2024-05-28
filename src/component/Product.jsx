import './Product.css'
import Price from './Price';

function Product({title,idx}){
    // let isDiscount = price>200;
    // let styles = {backgroundColor: isDiscount? "pink" : ""};
    let oldPrices=["9800","14999","6999","2979"];
    let newPrices=["7999","10999","4999","1299"];
    let discription = [["8000 DPI","5 programmable buttons"],["intutive surface","designed for ipad-Pro"],
    ["designed for ipad pro","intutive surface"],["wireless","optical orientation"]];
    return (
        <div className='Product'>
           <h4>{title}</h4>
           <p>{discription[idx][0]}</p>
           <p>{discription[idx][1]}</p>
           <Price oldPrice={oldPrices[idx]} newPrice = {newPrices[idx]}></Price>
        </div>
    )
}

export default Product;