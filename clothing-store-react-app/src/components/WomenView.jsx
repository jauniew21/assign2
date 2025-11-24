import { useState, useEffect } from 'react';
import placeholder from '../assets/shop-placeholder.png'
import { Link } from 'react-router-dom';

const WomenView = (props) => {
    const womenEntries = props.products.filter(prod => prod.gender == 'womens')

    return (<div>
        <ul className="grid grid-cols-4 gap-6">
            {womenEntries.map(prod => 
            <li key={prod.id} className='flex flex-col items-center'>
            <img key={prod.price+prod.id} src={placeholder} alt="placeholder image" className='size-48'/>
            <Link to={`/product/${prod.name}`} key={prod.name} className=''>{prod.name}</Link>
            <p key={prod.price-prod.id}>Price: ${prod.price.toFixed(2)}</p>
            </li>)}
        </ul>
    </div>)
}

export default WomenView;