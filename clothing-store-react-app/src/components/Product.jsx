import { useParams } from "react-router-dom";
import placeholder from '../assets/shop-placeholder.png'

const Product = (props) => {
    const { id } = useParams();
    const thisProduct = props.products.find(prod => prod.id == id)
    console.log(thisProduct)

    return(<div>
        <img src={placeholder} alt="placeholder image" className='size-72'/>
        <p>{thisProduct.name}</p>
    </div>)
}

export default Product;