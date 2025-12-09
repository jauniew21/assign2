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
        <div className=''>
            {prod.sizes && !showQuantity && (
                <div className=''>
                    <div className=''>
                        {prod.sizes.map((size, i) => (
                            <button key={i} type='button' className='w-12 h-12 m-0.5' style={{backgroundColor: "#505050"}} onClick={() => setSelSize(size)}>{size}</button>
                        ))}
                    </div>
                    <button style={{backgroundColor: "#303030"}} onClick={addItem}>Add to Cart</button>
                </div>

            )}
            {showQuantity && prod.sizes && (
                <div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex justify-center gap-1 mt-2'>
                            {prod.sizes.map((size, i) => (
                                <button key={i} type='button' className='w-12 h-12' onClick={() => setSelSize(size)}>{size}</button>
                            ))}
                        </div>

                        <div className='flex flex-row justify-center gap-2 mb-2'>
                            <button type="button" onClick={() => setQuantity(prev => Math.max(prev - 1, 1))} >
                                -
                            </button>
                            <input type="number" className='w-8 text-center ml-3'
                                value={quantity} min="1"
                                onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} />
                            <button type="button"
                                onClick={() => setQuantity(prev => prev + 1)}>
                                +</button>
                        </div>
                    </div>
                    <button className="mb-2" onClick={addItem}>Add to Cart</button>
                </div>
            )
            }
        </div>
    )
}

export default AddItemButton;