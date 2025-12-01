import { useState, useContext } from 'react';
import { CartContext } from "./CartContext"

const Shipping = ({ ship, setShip, dest, setDest }) => {
    const { cart, setCart } = useContext(CartContext)

    return (<div>
        <div>
            <select value={ship} onChange={(e) => setShip(e.target.value)} disabled={cart.length == 0}>
                <option value="standard" className="text-black">Standard</option>
                <option value="express" className="text-black">Express</option>
                <option value="priority" className="text-black">Priority</option>
            </select>
        </div>
        <div>
            <select value={dest} onChange={(e) => setDest(e.target.value)} disabled={cart.length == 0}>
                <option value="canada" className="text-black">Canada</option>
                <option value="usa" className="text-black">United States</option>
                <option value="int" className="text-black">International</option>
            </select>
        </div>
    </div>
    )
}


export default Shipping;