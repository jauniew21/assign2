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
        alert("Purchase successful. Thank you for your order.")
    }

    return (
        <div>
            {cart.length > 0 ? (<button onClick={checkout}>Checkout</button>) : (<button disabled className="border-none">Checkout</button>)}
        </div>
        
        
    )

}
export default Checkout;