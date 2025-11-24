import { useState, useEffect } from 'react';
import placeholder from '../assets/shop-placeholder.png'
import { Link } from 'react-router-dom';

const WomenView = (props) => {
    const womenEntries = props.products.filter(prod => prod.gender == 'womens')

    return (<div>
        <ul>
            {womenEntries.map(prod => <div key={prod.id}>
            <img key={prod.price+prod.id} src={placeholder} alt="placeholder image" className='size-48'/>
            <Link to={`/product/${prod.name}`} key={prod.name} className=''>{prod.name}</Link>
            <li key={prod.price-prod.id}>Price: ${prod.price.toFixed(2)}</li>
            </div>)}
        </ul>
    </div>)
}

export default WomenView;