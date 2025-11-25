import { useContext } from 'react'
import { CartContext } from './CartContext'
import CartItems from './CartItems'
// import CartItems from './CartItems'

const ShoppingCartView = (props) => {
    const { cart, setCart } = useContext(CartContext)

    const clearCart = () => {
        setCart([])
    }

    const checkout = () => {
        clearCart()
        // toaster message
        alert("Check outed.")
    }

    return (
        <div>
            <p className="">Shopping Cart</p>
            <div className="grid">
                <div className="flex flex-row">
                    <p>Items</p>
                    <div className="flex flex-row-reverse">
                        <p>Color</p>
                        <p>Size</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Subtotal</p>
                    </div>

                </div>
                <div>
                    <CartItems />
                </div>
            </div>
            <div>
                <p>Shipping</p>
                <select className="">
                    <option value="standard">Standard</option>
                    <option value="express">Express</option>
                    <option value="priority">Priority</option>
                </select>
                <select className="">
                    <option value="canada">Canada</option>
                    <option value="usa">United States</option>
                    <option value="internation">International</option>
                </select>
            </div>
            <div className="">
                <p className="">Summary</p>
                <div className="">
                    <div className="">
                        <p>Merchandise</p>
                        <p>$</p>
                    </div>
                    <div className="">
                        <p>Shipping</p>
                        <p>$</p>
                    </div>
                    <div className="">
                        <p>Tax</p>
                        <p>$ *5%*</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>$</p>
                    </div>
                </div>
            </div>
            <button onClick={checkout}>Checkout</button>
        </div>
    )

}
export default ShoppingCartView;


