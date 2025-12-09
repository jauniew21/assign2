import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import placeholder from '../assets/shop-placeholder.png';
import AdminProductView from "./AdminProductView";
import { CartContext } from "./CartContext";
import AddItemButton from "./AddItemButton";
import Drawer from '@mui/material/Drawer';

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

    return (<div className="pt-16">
        <div className="flex flex-row py-2">
            {props.isLoggedIn ? '' : <AdminProductView product={thisProduct} />}
            <p className="ml-5 flex self-center capitalize">{breadcrumb}</p>
        </div>
        <div className="flex flex-row gap-8">
            <div className="flex flex-col gap-3 ml-20">
                <img src={placeholder} alt="placeholder image" className='size-100 mr-20' />
                <div className="flex gap-4 pl-1">
                    <img src={placeholder} alt="placeholder image" className='size-30' />
                    <img src={placeholder} alt="placeholder image" className='size-30' />
                    <img src={placeholder} alt="placeholder image" className='size-30' />
                </div>
            </div>

            <div className="flex flex-col items-start">
                <p className="font-bold text-lg pb-1">{thisProduct?.name}</p>
                <p className="text-left mr-50">{thisProduct?.description}</p>
                <p className="pb-4">Price: ${thisProduct?.price.toFixed(2)}</p>

                <div className="flex justify-center items-center gap-10 p-4">
                    <p>Material: {thisProduct.material}</p>
                    {thisProduct?.color.map(c => <div className="flex justify-center">
                        <button style={{ backgroundColor: c.hex }} className="w-12 h-12"></button>
                    </div>)}
                </div>
                {thisProduct && (<AddItemButton prod={thisProduct} showQuantity={true} />)}
            </div>
        </div>

        <p className="font-bold my-3">Related Products</p>
        <div className="flex gap-6 justify-center">
            {relatedProd.map(prod => <div className="flex flex-col items-center w-54">
                <div className='group relative'>
                    <img key={prod.price + prod.id} src={placeholder} alt="placeholder image" className='size-48' />
                    <div className="absolute bottom-1 right-1 invisible group-hover:visible">
                        <AddItemButton prod={prod} />
                    </div>

                </div>
                <Link to={`/product/${prod.name}`} >{prod.name}</Link>
                <p className="capitalize">{prod.gender}' {prod.material} {prod.category}</p>
                <p>Price: ${prod.price.toFixed(2)}</p>
            </div>)}
        </div>
    </div>)
}

export default Product;