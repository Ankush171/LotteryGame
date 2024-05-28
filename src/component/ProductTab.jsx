import Product from "./Product";
import './ProductTab.css';


function ProductTab(){
    
return (
    <>
    <div className="ProductTab">
    <Product title="Logitech Mx Master" idx={0}></Product>
    <Product title="Apple Pencil (2nd Gen)" idx={1}></Product>
    <Product title="Zebronic Zeb-Transformer" idx={2}></Product>
    <Product title="Pentronic Toad 23" idx={3}></Product>
    </div>
    </>
)

}

export default ProductTab;