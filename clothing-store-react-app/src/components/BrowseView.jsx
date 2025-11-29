import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/shop-placeholder.png'

const BrowseView = (props) => {
    const [selected, setSelected] = useState([])
    const [selEntries, setSelEntries] = useState(props.products)
    const gender_opt = [...new Set(props.products.map(prod => prod.gender))]
    const category_opt = [...new Set(props.products.map(prod => prod.category))]
    const color_opt = [...new Set(props.products.flatMap(prod => prod.color))]
    const size_opt = [...new Set(props.products.flatMap(prod => prod.sizes))]

    const updateProducts = () => {
        if (selected.length === 0) {
            setSelEntries(props.products)
        } else {
            const filtered = props.products.filter(prod => selected.includes(prod.gender))
            setSelEntries(filtered);
        }
    }

    const toggleSelected = (param) => {
        const copy = [...selected]
        if (!selected.includes(param)) {
            copy.push(param)
            setSelected(copy)
        } else {
            const indx = copy.findIndex(p => p == param)
            copy.splice(indx, 1)
            setSelected(copy)
        }
        updateProducts()
    }

    useEffect(() => {
        updateProducts();
    }, [selected]);

    return (<div className='pt-16'>
        <nav className="fixed top-16 left-0 w-90 bottom-0 bg-gray-800/50">
            <p>Gender</p>
            {gender_opt.map(g => {
            const active = selected.includes(g);

            return(
                <button onClick={() => toggleSelected(g)}
                className={`${active ? "text-red-700" : "bg-black text-white"}`}>
                {g}</button>)}
            )}

            <p>Category</p>
            {category_opt.map(c => <button>{c}</button>)}
            <p>Colors</p>
            {color_opt.map(c =>
                <button style={{backgroundColor: c.hex}} className="w-12 h-12"></button>
            )}
            <p>Sizes</p>
            {size_opt.map(s => <button>{s}</button>)}
        </nav>

        <div className="pl-60 pt-16">
            <ul className="grid grid-cols-3 gap-6">
                {selEntries.map(prod => 
                <li key={prod.id} className='flex flex-col items-center'>
                <img key={prod.price+prod.id} src={placeholder} alt="placeholder image" className='size-48'/>
                <Link to={`/product/${prod.name}`} key={prod.name} className=''>{prod.name}</Link>
                <p key={prod.price-prod.id}>Price: ${prod.price.toFixed(2)}</p>
                </li>)}
            </ul>
        </div>
    </div>)
}

export default BrowseView;