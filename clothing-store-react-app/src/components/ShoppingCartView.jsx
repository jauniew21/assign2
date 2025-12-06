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
        <div className=''>
            <p className="font-bold">Shopping Cart</p>
            <div className="">
                <div className="flex flex-col">
                    <p className='self-start font-bold'>Items</p>
                    <CartItems />
                </div>
            </div>
            <div className='flex flex-row justify-between'>
                <div>
                    <p className='font-bold'>Shipping</p>
                    <Shipping ship={ship} setShip={setShip} dest={dest} setDest={setDest}/>
                </div>
                <div>
                    <p className='font-bold'>Summary</p>
                    <CartSummary ship={ship} dest={dest} />
                </div>

            </div>
            <Checkout />
        </div>
    )

}
export default ShoppingCartView;


