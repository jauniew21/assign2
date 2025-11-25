import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";

const CartItems = (props) => {
    const { cart, setCart } = useContext(CartContext)

    const addItem = () => {
        let c = cart.find(c => c.id === props.products.id)
        if (!c) {
            const newCart = [...cart]
            newCart.push(props.products)
            setCart(newCart)
        }
    }

    // doubt that this removeItem works
    const removeItem = () => {
        let c = cart.find(c => c.id == props.products.id)
        if (c) {
            const newCart = [...cart]
            newCart.pop(cart.id)
            setCart(newCart)
        }
    }
    return (
        <div>
            <ul>
                {cart.map(c => <li>
                    <button onClick={removeItem}>-</button>
                    <p>{c.name}</p>
                    <p>*colour*</p>
                    <p>{c.size}</p>
                    <p>{c.price}</p>
                    <p>*quantity</p>
                    <p>*subtotal*</p>
                </li>)}
            </ul>
        </div>
    )
}

export default CartItems;