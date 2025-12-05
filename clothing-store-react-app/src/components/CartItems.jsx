import { useContext, useState } from "react";
import { CartContext } from "./CartContext.jsx";
import placeholder from '../assets/shop-placeholder.png'

const CartItems = (props) => {
    const { cart, setCart } = useContext(CartContext)

    const removeItem = (id) => {
        let c = cart.find(c => c.id === id)
        if (c) {
            const newCart = [...cart]
            newCart.pop(c)
            setCart(newCart)
        }
        alert("Removed item: " + c.name)
    }

    if (cart.length == 0) {
        return (
            <div>
                <p>Cart is empty.</p>
            </div>
        )
    }
    else {
        return (
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <p>Color</p>
                    <p>Size</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
                <ul className="flex flex-row">
                    {cart.map(c => <li className="flex flex-row">
                        <button onClick={() => removeItem(c.id)}>-</button>
                        <img src={placeholder} alt="placeholder image" className='size-36' />
                        <p>{c.name}</p>
                        <button style={{ backgroundColor: c.color[0].hex }} className="w-12 h-12"></button>
                        <p>*size*{c.size}</p>
                        <p>${c.price.toFixed(2)}</p>
                        <p>*quantity</p>
                        <p>${c.price}*quantity</p>
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default CartItems;