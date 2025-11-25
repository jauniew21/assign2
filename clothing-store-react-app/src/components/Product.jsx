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

<<<<<<< HEAD
    return(<div className="">
        <div>
            <img src={placeholder} alt="placeholder image" className='size-72'/>
            <div className="flex">
                <img src={placeholder} alt="placeholder image" className='size-36'/>
                <img src={placeholder} alt="placeholder image" className='size-36'/>
            </div>
        </div>
        <p className="">{thisProduct.name}</p>
        <p>{thisProduct.material} {thisProduct.category}</p>
        <p>Price: ${thisProduct.price.toFixed(2)}</p>
        <p>{thisProduct.description}</p>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" min="1"/>
        <div className="flex gap-2 justify-center">
            {thisProduct.sizes.map(s => <div>
                <button className="w-12 h-12 flex justify-center items-center border rounded">{s}</button>
            </div>)}
        </div>
        <div className="flex gap-2 justify-center">
            {thisProduct.color.map(c => <div>
                <button style={{backgroundColor: c.hex}} className="w-12 h-12"></button>
            </div>)}
        </div>
        <button>+ Add to Cart</button>

        <p>Related Products</p>
        <div className="flex gap-6">
            {relatedProd.map(prod => <div>
                <img src={placeholder} alt="placeholder image" className='size-36'/>
                <Link to={`/product/${prod.name}`}>{prod.name}</Link>
                <p>{prod.material} {prod.category}</p>
                <p>Price: ${prod.price.toFixed(2)}</p>
            </div>)}
        </div>
=======
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
>>>>>>> d7f5a4bceb2cfd2c287b15be342fab3eec38db44
    </div>)
}

export default Product;