import { useContext } from 'react'
import { CartContext } from './CartContext'

const CartSummary = ({ ship, dest }) => {
    const { cart, setCart } = useContext(CartContext)

    let tax = 0.05
    let shipCost = 10

    if (dest == 'canada') {
        tax = 0.05
        if (ship == 'standard') {
            shipCost = 10
        }
        else if (ship == 'express') {
            shipCost = 25
        }
        else if (ship == 'priority') {
            shipCost = 35
        }
    }
    else if (dest == 'usa') {
        tax = 0.1
        if (ship == 'standard') {
            shipCost = 15
        }
        else if (ship == 'express') {
            shipCost = 25
        }
        else if (ship == 'priority') {
            shipCost = 50
        }
    }
    else if (dest == 'int') {
        tax = 0.15
        if (ship == 'standard') {
            shipCost = 20
        }
        else if (ship == 'express') {
            shipCost = 30
        }
        else if (ship == 'priority') {
            shipCost = 50
        }
    }

    let merchTotal = 0
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        merchTotal += cart[i].price
    }

    if (merchTotal >= 500) {
        shipCost = 0
    }

    total = (merchTotal * tax) + merchTotal + shipCost

    return (<div className='flex flex-col items bg-neutral-700 p-2 mt-1'>
        <div className="flex flex-row justify-between pb-1">
            <p>Merchandise</p>
            {cart.length > 0 ? (<p>${merchTotal.toFixed(2)}</p>) : (<p>$0.00</p>)}
        </div>
        <div className="flex flex-row justify-between pb-1">
            <p>Shipping</p>
            {cart.length > 0 ? (<p>${shipCost.toFixed(2)}</p>) : (<p>----</p>)}
        </div>
        <div className="flex flow-row justify-between pb-1">
            <p>Tax</p>
            {cart.length > 0 ? (<p>${(tax * merchTotal).toFixed(2)}</p>) : (<p>$0.00</p>)}
        </div>
        <hr></hr>
        <div className='flex flex-row justify-between pt-1'>
            <p className='font-bold'>Total</p>
            {cart.length > 0 ? (<p className='font-bold'>${total.toFixed(2)}</p>) : (<p>$0.00</p>)}
            
        </div>
    </div>)
}
// }

export default CartSummary;