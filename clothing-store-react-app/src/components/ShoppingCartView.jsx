import { CartContext } from './CartContext'
// import CartItems from './CartItems'

const ShoppingCartView = (props) => {
    const {cart, setCart} = useContext(CartContext)
    // doubt that this removeItem works
    const removeItem = () => {
        let c = cart.find(c => c.id == props.product.id)
        if (c) {
            const newCart = [...cart]
            newCart.pop(cart.id)
            setCart(newCart)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <div>
            <ul>
                {cart.map(c => <li>
                    <button onClick={removeItem}>-</button>
                    {c.title}
                </li>)}
            </ul>
        <p className="">Shopping Cart</p>
        <div className="">
            <button onClick={checkout}>Checkout</button>
        </div>

    </div>
    )

}

export default ShoppingCartView;


