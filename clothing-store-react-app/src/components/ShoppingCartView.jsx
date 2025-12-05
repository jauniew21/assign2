import { useState, useContext } from 'react'
import { CartContext } from './CartContext'
import CartItems from './CartItems'
import Shipping from './Shipping'
import CartSummary from './CartSummary'
import Checkout from './Checkout'

const ShoppingCartView = (props) => {
    const { cart, setCart } = useContext(CartContext)

    const [ship, setShip] = useState("standard")
    const [dest, setDest] = useState("canada")

    return (
        <div>
            <p className="">Shopping Cart</p>
            <div className="grid">
                <div className="flex flex-row">
                    <p>Items</p>
                    <CartItems />
                </div>
            </div>
            <div className='flex flex-row'>
                <div>
                    <p>Shipping</p>
                    <Shipping ship={ship} setShip={setShip} dest={dest} setDest={setDest}/>
                </div>
                <div>
                    <p>Summary</p>
                    <CartSummary ship={ship} dest={dest} />
                </div>

            </div>
            <Checkout />
        </div>
    )

}
export default ShoppingCartView;


