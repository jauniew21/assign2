import { useState, useContext } from 'react'
import { CartContext } from './CartContext'
import CartItems from './CartItems'
import Shipping from './Shipping'
import CartSummary from './CartSummary'

const ShoppingCartView = (props) => {
    const { cart, setCart } = useContext(CartContext)

    const [ship, setShip] = useState("standard")
    const [dest, setDest] = useState("canada")
    const [selSize, setSelSize] = useState('')

    return (
        <div>
            <p className="">Shopping Cart</p>
            <div className="grid">
                <div className="flex flex-row">
                    <p>Items</p>
                    <CartItems selSize={selSize}/>
                </div>
            </div>
            <div>
                <p>Shipping</p>
                <Shipping ship={ship} setShip={setShip} dest={dest} setDest={setDest} />
                <p>Summary</p>
                <CartSummary ship={ship} dest={dest} />
            </div>
            <button onClick={checkout} disabled={cart.length == 0} className="disabled:cursor">Checkout</button>
        </div>
    )

}
export default ShoppingCartView;


