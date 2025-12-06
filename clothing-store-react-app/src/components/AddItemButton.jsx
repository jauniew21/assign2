import { useContext } from 'react'
import { CartContext } from './CartContext'

const AddItemButton = ({prod}) => {

    const { cart, setCart } = useContext(CartContext)

     const addItem = () => {
        let c = cart.find(c => c.id === prod.id)
        if (!c) {
            const newCart = [...cart]
            const cartProd = prod
            cartProd.quantity = 1
            console.log(cartProd.quantity)
            newCart.push(cartProd)
            setCart(newCart)
            alert("Added item: " + prod.name)
        }
        else {
            alert("Added item again: " + c.name)
        }
    }
    return (<button style={{background: "#7d84ffff"}}onClick={addItem} >+</button>)
}

export default AddItemButton;