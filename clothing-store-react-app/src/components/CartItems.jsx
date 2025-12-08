import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import placeholder from '../assets/shop-placeholder.png'

const CartItems = (props) => {
    const { cart, setCart } = useContext(CartContext)

    const removeItem = (id) => {
        const item = cart.find(c => c.id === id)
        if (!item) {
            alert("Item not found in cart")
            return
        }
        const newCart = cart.filter(c => c.id !== id)
        setCart(newCart)

        alert("Removed item: " + item.name)
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
            <div className="grid grid-flow-row gap-y-5 gap-x-6 auto-cols-auto">
                <div className="col-span-8 grid grid-cols-subgrid">
                    <p className="col-start-2 font-bold">Items</p>
                    <p className="col-start-4 font-bold">Color</p>
                    <p className="font-bold">Size</p>
                    <p className="font-bold">Price</p>
                    <p className="font-bold">Quantity</p>
                    <p className="font-bold">Subtotal</p>
                </div>
                <ul className="col-span-8 grid grid-cols-subgrid gap-y-5">
                    {cart.map(c =>
                        <li className="col-span-8 grid grid-cols-subgrid grid-flow-col justify-items-center items-center">
                            <button className="size-11" onClick={() => removeItem(c.id)}>-</button>
                            <img src={placeholder} alt="placeholder image" className='h-35 w-35' />
                            <p>{c.name}</p>
                            <button style={{ backgroundColor: c.color[0].hex }} className="w-12 h-12"></button>
                            <p>{c.size}</p>
                            <p>${c.price.toFixed(2)}</p>
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