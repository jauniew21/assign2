import { useContext, useState } from 'react'
import { CartContext } from './CartContext'

const AddItemButton = ({ prod, showQuantity = false }) => {
    const { cart, setCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)
    const [selSize, setSelSize] = useState(prod?.sizes?.[0] || null)

    const addItem = () => {
        const qty = showQuantity ? Number(quantity) : 1

        const existing = cart.find(item => item.id === prod.id && item.size === selSize)

        if (existing) {
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
        <div>
            {prod.sizes && (
                <div>
                    {prod.sizes.map((size, i) => (
                        <button key={i} type='button' onClick={() => setSelSize(size)}>{size}</button>
                    ))}
                </div>
            )}
            {showQuantity && (
                <div>
                    <button type="button" onClick={() => setQuantity(prev => Math.max(prev - 1, 1))} >
                        -
                    </button>
                    <input type="number"
                        value={quantity} min="1"
                        onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} />
                    <button type="button"
                        onClick={() => setQuantity(prev => prev + 1)}>
                        +</button>
                </div>
            )
            }
            <button onClick={addItem}>Add to Cart</button>
        </div >
    )
}

export default AddItemButton;