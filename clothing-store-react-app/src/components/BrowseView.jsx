import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import placeholder from '../assets/shop-placeholder.png';
import { CartContext } from "./CartContext";
import AddItemButton from "./AddItemButton";

const BrowseView = (props) => {
    const [selected, setSelected] = useState([]);
    const [selEntries, setSelEntries] = useState(props.products);
    const [sort, setSort] = useState("");

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

    const sortedProducts = [...selEntries].sort((a, b) => {
        if (sort === "name") return a.name.localeCompare(b.name);
        if (sort === "price") return a.price - b.price;
        if (sort === "category") return a.category.localeCompare(b.category);
        return 0;
    });

    const updateProducts = () => {
        if (selected.length === 0) {
            setSelEntries(props.products)
        } else {
            const filtered = props.products.filter(prod =>
                selected.includes(prod.gender) ||
                selected.includes(prod.category) ||
                prod.color.some(color => selected.includes(color.name)) ||
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
    const { cart, setCart } = useContext(CartContext)

    useEffect(() => {
        updateProducts();
    }, [selected]);

    return (<div className='pt-16'>
        <div>Sort: </div>
        <select
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 rounded border bg-white">
            {/* <option value="">Sort by…</option> */}
            <option value="name">Product Name (A–Z)</option>
            <option value="price">Price</option>
            <option value="category">Category</option>
        </select>

        <div>Results: </div> 
        <button 
        onClick={() => {setSelected([])}}
        className='bg-red-600'>Clear All</button>
        {selected.map(cat => 
            <button onClick={() => toggleSelected(cat)}>
            {cat}</button>)}

        <nav className="fixed top-16 left-0 w-90 bottom-0 bg-gray-800/50">
            <div className="collapse collapse-plus bg-base-100 border-base-300 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">Gender</div>
                <div className="collapse-content text-sm">
                    {gender_opt.map(g => {
                        const active = selected.includes(g);

                        return (
                            <button onClick={() => toggleSelected(g)}
                                className={`${active ? "text-red-700" : "bg-black text-white"}`}>
                                {g}</button>)
                    })}
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border-base-300 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">Category</div>
                <div className="collapse-content text-sm">
                    {category_opt.map(c => {
                    const active = selected.includes(c);

                    return (
                        <button onClick={() => toggleSelected(c)}
                            className={`${active ? "text-red-700" : "bg-black text-white"}`}>
                            {c}</button>)
                    })}
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border-base-300 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">Sizes</div>
                <div className="collapse-content text-sm">
                    {size_opt.map(s => {
                        const active = selected.includes(s);

                        return (
                            <button onClick={() => toggleSelected(s)}
                                className={`${active ? "text-red-700" : "bg-black text-white"}`}>
                                {s}</button>
                        )
                    })}
                </div>
            </div>
            
            <div className="collapse collapse-plus bg-base-100 border-base-300 border">
                <input type="checkbox" />
                <div className="collapse-title font-semibold">Colors</div>
                <div className="collapse-content text-sm">
                    {color_opt.map(c => {
                        const active = selected.includes(c);

                        return (
                            <button onClick={() => toggleSelected(c.name)}
                                style={{ backgroundColor: c.hex }}
                                className={`${active ? "border border-red-700" : ""} w-12 h-12`}>
                            </button>)
                    })}
                    {/* {color_opt.map(c => {
                        const active = selected.includes(c);

                        return (
                            <button onClick={() => toggleSelected(c.name)}
                            style={{ backgroundColor: c.hex }}
                                className={`${active ? "text-red-700" : "bg-black text-white"}`}>
                                {c.name}</button>
                        )
                    })} */}
                </div>
            </div>
        </nav>

        <div className="pl-60 pt-16">
            <ul className="grid grid-cols-3 gap-6">
                {sortedProducts.map(prod =>
                    <li key={prod.id} className='flex flex-col items-center'>
                        <div className='group relative'>
                            <img key={prod.price + prod.id} src={placeholder} alt="placeholder image" className='size-48' />
                            <div className="absolute bottom-1 right-1 invisible group-hover:visible">
                                <AddItemButton prod={prod} />
                            </div>

                        </div>
                        <Link to={`/product/${prod.name}`} key={prod.name} className=''>{prod.name}</Link>
                        <p key={prod.price - prod.id}>Price: ${prod.price.toFixed(2)}</p>

                    </li>)}
            </ul>
        </div>
    </div>)
}

export default BrowseView;