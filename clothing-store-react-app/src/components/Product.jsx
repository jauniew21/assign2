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
    const breadcrumb = "Home > " + thisProduct?.gender + " > " +
        thisProduct?.category + " > " + thisProduct?.name

    const { cart, setCart } = useContext(CartContext)
    
    const addItem = () => {
        let c = cart.find(c => c.id === thisProduct.id)
        if (!c) {
            const newCart = [...cart]
            newCart.push(thisProduct)
            setCart(newCart)
            alert("Added item: " + thisProduct.name)
        }
        else {
            alert("Added item again: " + c.name)
        }
    }

    return (<div className="pt-16">
        <div className="py-2">
            <p>{breadcrumb}</p>
        </div>
        <div className="flex">
            <div>
                <img src={placeholder} alt="placeholder image" className='size-72' />
                <div className="flex">
                    <img src={placeholder} alt="placeholder image" className='size-36' />
                    <img src={placeholder} alt="placeholder image" className='size-36' />
                </div>
            </div>

            <div>
                <p>{thisProduct?.name}</p>
                <p>Price: ${thisProduct?.price.toFixed(2)}</p>
                <p className="text-left">{thisProduct?.description}</p>
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
                <button onClick={addItem}>+ Add to Cart</button>
            </div>
        </div>

        <p>Related Products</p>
        <div className="flex gap-6 justify-center">
            {relatedProd.map(prod => <div>
                <img src={placeholder} alt="placeholder image" className='size-36'/>
                <Link to={`/product/${prod.name}`}>{prod.name}</Link>
                <p>{prod.gender}' {prod.material} {prod.category}</p>
                <p>Price: ${prod.price.toFixed(2)}</p>
            </div>)}
        </div>
    </div>)
}

export default Product;