import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import placeholder from '../assets/shop-placeholder.png'
import { Link } from 'react-router-dom';
import AddItemButton from "./AddItemButton.jsx";

const CartItems = (props) => {
    const { cart, setCart, quantity, setQuantity } = useContext(CartContext)

    const removeItem = (product) => {
        console.log(product)
        const item = cart.find(c => c.id === product.id && c.size === product.size)
        console.log(item)
        if (!item) {
            alert("Item not found in cart")
            return
        }
        const newCart = cart.filter(c => !(c.id === product.id && c.size === product.size))
        setCart(newCart)

        alert("Removed item: " + item.name + " " + item.size)
    }

    if (cart.length == 0) {
        return (
            <p>
                <p>Cart is empty.</p>
            </p>
        )
    }
    else {
        return (
            <div className="grid grid-flow-row gap-y-5 gap-x-6 auto-cols-auto bg-neutral-800 pb-5">
                <div className="col-span-8 grid grid-cols-subgrid bg-neutral-900 py-2 px-5">
                    <p className="col-start-2 font-bold">Items</p>
                    <p className="col-start-4 font-bold">Color</p>
                    <p className="font-bold">Size</p>
                    <p className="font-bold">Price</p>
                    <p className="font-bold">Quantity</p>
                    <p className="font-bold">Subtotal</p>
                </div>
                <ul className="col-span-8 grid grid-cols-subgrid gap-y-5 mx-5">
                    {cart.map(c =>
                        <li className="col-span-8 grid grid-cols-subgrid grid-flow-col justify-items-center items-center">
                            <button className="size-11" onClick={() => removeItem({ id: c.id, size: c.size })}>-</button>
                            <img src={placeholder} alt="placeholder image" className='h-35 w-35' />
                            <Link to={`/product/${c.name}`} key={c.name}>{c.name}</Link>
                            <button style={{ backgroundColor: c.color[0].hex, border: "solid #15191e" }} className="w-12 h-12"></button>
                            <p>{c.size}</p>
                            <p>${c.price.toFixed(2)}</p>

                            {/* <div className='flex flex-row justify-center gap-2 mb-2'>
                                <button type="button" onClick={() => setQuantity(prev => Math.max(prev - 1, 1))} >
                                    -
                                </button>
                                <input type="number" className='w-8 text-center ml-3'
                                    value={quantity} min="1"
                                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} />
                                <button type="button"
                                    onClick={() => setQuantity(prev => prev + 1)}>
                                    +</button>
                            </div> */}
                            <p>{c.quantity}</p>

                            <p>${(c.price * c.quantity).toFixed(2)}</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default CartItems;