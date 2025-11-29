import { useContext } from 'react'
import { CartContext } from './CartContext'

const CartSummary = ({ ship, dest }) => {
    const { cart, setCart } = useContext(CartContext)

    if (cart.length == 0) {
        return (<div>
            <div className="">
                <p>Merchandise</p>
                <p>$0.00</p>
            </div>
            <div className="">
                <p>Shipping</p>
                <p>--</p>
            </div>
            <div className="">
                <p>Tax</p>
                <p>--</p>
            </div>
            <div>
                <p>Total</p>
                <p>$0.00</p>
            </div>
        </div>)
    } else {
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
            tax = 0.1
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

        return (<div>
            <div className="">
                <p>Merchandise</p>
                <p>${merchTotal.toFixed(2)}</p>
            </div>
            <div className="">
                <p>Shipping</p>
                <p>${shipCost.toFixed(2)}</p>
            </div>
            <div className="">
                <p>Tax</p>
                <p>${(tax * merchTotal).toFixed(2)}</p>
            </div>
            <div>
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
            </div>
        </div>)
    }
}

export default CartSummary;