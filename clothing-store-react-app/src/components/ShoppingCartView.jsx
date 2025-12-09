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
        <div className='mt-16' style={{padding: "0"}}>
            <div className='flex flex-col'>
                <p className="font-bold text-xl">Shopping Cart</p>
                <div className="flex flex-col py-5">
                    <CartItems />
                </div>
                <div className='flex flex-row justify-around pt-5 pb-10'>
                    <div>
                        <p className='font-bold'>Shipping</p>
                        <Shipping ship={ship} setShip={setShip} dest={dest} setDest={setDest} />
                    </div>
                    <div className='w-80'>
                        <p className='font-bold'>Summary</p>
                        <CartSummary ship={ship} dest={dest} />
                    </div>
                </div>
                <Checkout />
            </div>
        </div>
    )

}
export default ShoppingCartView;


