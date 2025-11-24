import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import placeholder from '../assets/shop-placeholder.png'

const Product = (props) => {
    const { name } = useParams();
    const thisProduct = props.products.find(prod => prod.name == name);
    const relatedProd = props.products.filter(prod => 
        prod.category == thisProduct.category && 
        prod.gender == thisProduct.gender &&
        prod.id != thisProduct.id)
        .slice(0, 4);

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
    </div>)
}

export default Product;