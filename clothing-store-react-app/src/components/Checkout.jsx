import { useContext } from "react"
import { CartContext } from "./CartContext"

const Checkout = () => {
    const { cart, setCart } = useContext(CartContext)

    const clearCart = () => {
        setCart([])
    }

    const checkout = () => {
        clearCart()
        // toaster message
        alert("Checkout - purchased.")
    }

    if (cart.length > 0) {
        return (
            <button onClick={checkout}>Checkout</button>
        )
    }
    else {
        return (
            <button className="">Checkout</button>
        )
    }
}
export default Checkout;