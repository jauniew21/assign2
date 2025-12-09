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
    const color_opt = [...new Map(props.products.flatMap(prod => prod.color)
        .map(color => [color.name, color])).values()];
    const size_opt = [...new Set(props.products.flatMap(prod => prod.sizes))]

    console.log(color_opt)

    const sortedProducts = [...selEntries].sort((a, b) => {
        if (sort === "name") return a.name.localeCompare(b.name);
        if (sort === "price") return a.price - b.price;
        if (sort === "category") return a.category.localeCompare(b.category);
        return 0;
    });

    const updateProducts = () => {
        if (selected.length === 0) {
            setSelEntries(props.products)
            return;
        }

        const filtered = props.products.filter(prod => {
            const genderMatch =
                !gender_opt.some(g => selected.includes(g)) ||
                selected.includes(prod.gender);

            const categoryMatch =
                !category_opt.some(c => selected.includes(c)) ||
                selected.includes(prod.category);

            const colorMatch =
                !color_opt.some(c => selected.includes(c.name)) ||
                prod.color.some(color => selected.includes(color.name));

            const sizeMatch =
                !size_opt.some(s => selected.includes(s)) ||
                prod.sizes.some(size => selected.includes(size));

            return genderMatch && categoryMatch && colorMatch && sizeMatch;
        });

        setSelEntries(filtered);
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
        <p className='font-bold text-xl mb-5'>Browse</p>
        <div>Sort:
            <select
                onChange={(e) => setSort(e.target.value)}
                className="mx-5 px-3 py-2 rounded border bg-neutral-200 text-black">
                {/* <option value="">Sort by…</option> */}
                <option value="name">Product Name (A–Z)</option>
                <option value="price">Price</option>
                <option value="category">Category</option>
            </select>
        </div>

        <div>Results:
            <button
                onClick={() => { setSelected([]) }}
                className='bg-red-600 ml-5 mt-2'>Clear All</button>
            {selected.map(cat =>
                <button onClick={() => toggleSelected(cat)} className='capitalize'>
                    {cat}</button>)}
        </div>

        <div className='flex flex-col'>
                <nav className="fixed top-16 left-0 w-90 bottom-0 bg-gray-800/50 overflow-y-auto">
                <div className="collapse collapse-plus bg-base-100 border-base-300 border">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold">Gender</div>
                    <div className="collapse-content text-sm">
                        {gender_opt.map(g => {
                            const active = selected.includes(g);

                            return (
                                <button onClick={() => toggleSelected(g)}
                                    className={`${active ? "text-red-700" : "bg-black text-white"} capitalize`}>
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

                <div className="collapse-content text-sm space-y-2">
                    {color_opt.map(c => {
                        const active = selected.includes(c.name);

                        return (
                            <button
                                key={c.name}
                                onClick={() => toggleSelected(c.name)}
                                className={`flex items-center gap-3 w-full px-2 py-1 rounded
                                    ${active ? "bg-base-200 ring-2 ring-red-700" : "hover:bg-base-200"}
                                `}
                            >
                                <span
                                    className="w-5 h-5 rounded border"
                                    style={{ backgroundColor: c.hex }}
                                />
                                <span className="capitalize">{c.name}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
            </nav>

            <div className="pl-60 pt-16">
                <ul className="grid grid-cols-3 gap-6">
                    {sortedProducts.length === 0 ? (
                        <p className="text-center text-gray-500 mt-8">
                            No products match current filters.
                        </p>
                    ) : (sortedProducts.map(prod =>
                        <li key={prod.id} className='flex flex-col items-center'>
                            <div className='group relative'>
                                <img key={prod.price + prod.id} src={placeholder} alt="placeholder image" className='size-48' />
                                <div className="absolute bottom-1 right-1 invisible group-hover:visible">
                                    <AddItemButton prod={prod} />
                                </div>

                            </div>
                            <Link to={`/product/${prod.name}`} key={prod.name} className=''>{prod.name}</Link>
                            <p key={prod.price - prod.id}>Price: ${prod.price.toFixed(2)}</p>
                        </li>))}
                </ul>
            </div>
        </div>
    </div>)
}

export default BrowseView;