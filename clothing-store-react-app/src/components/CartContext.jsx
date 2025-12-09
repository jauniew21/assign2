import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext()

const CartContextProvider = (props) => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart, quantity, setQuantity }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;