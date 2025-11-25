import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import placeholder from '../assets/shop-placeholder.png'
import { CartContext } from "./CartContext";

const Product = (props) => {
    const { name } = useParams();
    const thisProduct = props.products.find(prod => prod.name == name);
    const relatedProd = props.products.filter(prod =>
        prod.category == thisProduct.category &&
        prod.gender == thisProduct.gender &&
        prod.id != thisProduct.id)
        .slice(0, 4);

    const { cart, setCart } = useContext(CartContext)
    
    // does not work yet, but getting close?
    const addItem = () => {
        let c = cart.find(c => c.id === props.products.id)
        if (!c) {
            const newCart = [...cart]
            newCart.push(props.product)
            setCart(newCart)
            alert("Added item" + c)
        }
    }

    return (<div>
        <img src={placeholder} alt="placeholder image" className='size-72' />
        <img src={placeholder} alt="placeholder image" className='size-36' />
        <img src={placeholder} alt="placeholder image" className='size-36' />
        <p>{thisProduct?.name}</p>
        <p>Price: ${thisProduct?.price.toFixed(2)}</p>
        <p>{thisProduct?.description}</p>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" min="1" />
        {thisProduct?.sizes.map(s => <div>
            <button>{s}</button>
        </div>)}
        {/* {thisProduct.color.map(c => <div>
            <button className={`background-color: ${c.hex}`}>{c.name}</button>
        </div>)} */}
        <button onClick={addItem}>+ Add to Cart</button>

        <p>Related Products</p>
        {relatedProd.map(prod => <div>
            <img src={placeholder} alt="placeholder image" className='size-36' />
            <Link to={`/product/${prod.name}`}>{prod.name}</Link>
            <p>Price: ${prod.price.toFixed(2)}</p>
        </div>)}
    </div>)
}

export default Product;