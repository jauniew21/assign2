import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/shop-placeholder.png'

const BrowseView = (props) => {
    const [selected, setSelected] = useState([])
    const [selEntries, setSelEntries] = useState(props.products)
    const gender_opt = [...new Set(props.products.map(prod => prod.gender))]
    const category_opt = [...new Set(props.products.map(prod => prod.category))]
    let color_opt = [...new Set(props.products.flatMap(prod => prod.color))];
    const size_opt = [...new Set(props.products.flatMap(prod => prod.sizes))]
    
    const u_color = [...new Set(color_opt.flatMap(color => color.name))];
    const u_hex = [...new Set(color_opt.flatMap(color => color.hex))];
    color_opt = u_color.map((name, i) => ({
        name,
        hex: u_hex[i]
    }))

    const updateProducts = () => {
        if (selected.length === 0) {
            setSelEntries(props.products)
        } else {
            const filtered = props.products.filter(prod => 
                selected.includes(prod.gender) ||
                selected.includes(prod.category) ||
                selected.includes(prod.color.name) ||
                prod.sizes.some(size => selected.includes(size))
            )
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
            {category_opt.map(c => {
                const active = selected.includes(c);

                return(
                    <button onClick={() => toggleSelected(c)}
                    className={`${active ? "text-red-700" : "bg-black text-white"}`}>
                    {c}</button>)}
            )}

            <p>Sizes</p>
            {/* fix sizing */}
            {size_opt.map(s => {
                const active = selected.includes(s);

                return(
                    <button onClick={() => toggleSelected(s)}
                    className={`${active ? "text-red-700" : "bg-black text-white"}`}>
                    {s}</button>
                )}
            )}

            <p>Colors</p>
            {/* fix color hex stuff */}
            {color_opt.map(c => {
                const active = selected.includes(c);

                return(
                    <button onClick={() => toggleSelected(c.name)} 
                    style={{backgroundColor: c.hex}} 
                    className={`${active ? "border border-red-700" : ""} w-12 h-12`}>
                    </button>)
                }
            )}
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