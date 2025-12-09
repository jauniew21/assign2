import { useState, useEffect, createContext } from 'react';

export const CartContext = createContext()

const CartContextProvider = (props) => {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    const addItem = (prod) => {
        setCart(current => {
            const existing = cart.find(item => item.id === prod.id && item.size === selSize)
            if (!existing) {
                return [...current, {...prod, quantity: 1}]
        }
        return current.map(i => )

        c

        
            const newCart = cart.map(item =>
                item.id === prod.id && item.size === selSize
                    ? { ...item, quantity: item.quantity + qty }
                    : item
            )
            setCart(newCart)
        } else {
            setCart([...cart, { ...prod, quantity: qty, size: selSize }])
        }
        alert(`Added ${qty} x ${prod.name} ${selSize} to cart`)
    }

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;