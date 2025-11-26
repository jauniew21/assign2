import { Link } from 'react-router-dom';
import placeholder from '../assets/shop-placeholder.png'

const BrowseView = (props) => {
    const gender_opt = [...new Set(props.products.map(prod => prod.gender))]
    const category_opt = [...new Set(props.products.map(prod => prod.category))]
    const color_opt = [...new Set(props.products.flatMap(prod => prod.color))]
    const size_opt = [...new Set(props.products.flatMap(prod => prod.sizes))]

    return (<div>
        <div>
            <p>Gender</p>
            {gender_opt.map(g => <li>{g}</li>)}
            <p>Category</p>
            {category_opt.map(c => <li>{c}</li>)}
            <p>Colors</p>
            {color_opt.map(c =>
                <button style={{backgroundColor: c.hex}} className="w-12 h-12"></button>
            )}
            <p>Sizes</p>
            {size_opt.map(s => <li>{s}</li>)}
        </div>

        <ul className="grid grid-cols-3 gap-6">
            {props.products.map(prod => 
            <li key={prod.id} className='flex flex-col items-center'>
            <img key={prod.price+prod.id} src={placeholder} alt="placeholder image" className='size-48'/>
            <Link to={`/product/${prod.name}`} key={prod.name} className=''>{prod.name}</Link>
            <p key={prod.price-prod.id}>Price: ${prod.price.toFixed(2)}</p>
            </li>)}
        </ul>
    </div>)
}

export default BrowseView;