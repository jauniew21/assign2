import { useParams } from "react-router-dom";
import placeholder from '../assets/shop-placeholder.png'

const Product = (props) => {
    const { id } = useParams();
    const thisProduct = props.products.find(prod => prod.id == id)

    return(<div>
        <img src={placeholder} alt="placeholder image" className='size-72'/>
        <img src={placeholder} alt="placeholder image" className='size-36'/>
        <img src={placeholder} alt="placeholder image" className='size-36'/>
        <p>{thisProduct.name}</p>
        <p>Price: ${thisProduct.price.toFixed(2)}</p>
        <p>{thisProduct.description}</p>
        <label for="quantity">Quantity:</label>
        <input type="number" name="quantity" min="1"/>
        {thisProduct.sizes.map(s => <div>
            <button>{s}</button>
        </div>)}
        {/* {thisProduct.color.map(c => <div>
            <button className={`background-color: ${c.hex}`}>{c.name}</button>
        </div>)} */}
        <button>+ Add to Cart</button>

        <p>Similar Products: </p>
        {/* Similar Products section */}
    </div>)
}

export default Product;