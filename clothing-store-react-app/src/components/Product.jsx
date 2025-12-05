import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
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
    const [selSize, setSelSize] = useState('')
    const [quantity, setQuantity] = useState(1)


    const addItem = () => {
        if (!selSize) return;

        let c = cart.find(c => c.id === thisProduct.id && c.size === selSize)
        if (c) {
            setCart(prev => prev.map(item => item.id === this.Product.id && item.size ))
        }
        if (!c) {
            const newCart = [...cart]
            let cartItem = thisProduct
            cartItem.sizes = selSize
            newCart.push(cartItem)
            setCart(newCart)
            alert("Added item: " + cartItem.name + cartItem.sizes)
        }
        
    }

    return (<div className="pt-16">
        <img src={placeholder} alt="placeholder image" className='size-72' />
        <img src={placeholder} alt="placeholder image" className='size-36' />
        <img src={placeholder} alt="placeholder image" className='size-36' />
        <p>{thisProduct?.name}</p>
        <p>Price: ${thisProduct?.price.toFixed(2)}</p>
        <p>{thisProduct?.description}</p>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" min="1" />
        <div className="flex gap-2 justify-center">
            {thisProduct?.sizes.map(s => <div>
                <button key={s} onClick={() => setSelSize(s)} className="w-12 h-12 flex justify-center items-center border rounded">{s}</button>
            </div>)}
        </div>
        <div className="flex gap-2 justify-center">
            {thisProduct?.color.map(c => <div>
                <button style={{ backgroundColor: c.hex }} className="w-12 h-12"></button>
            </div>)}
        </div>
        <button onClick={addItem} disabled={!selSize}>+ Add to Cart</button>
        <p>Related Products</p>
        <div className="flex gap-6">
            {relatedProd.map(prod => <div>
                <img src={placeholder} alt="placeholder image" className='size-36' />
                <Link to={`/product/${prod.name}`}>{prod.name}</Link>
                <p>{prod.material} {prod.category}</p>
                <p>Price: ${prod.price.toFixed(2)}</p>
            </div>)}
        </div>
    </div>)
}

export default Product;