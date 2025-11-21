import { useState, useEffect } from 'react';
import placeholder from '../assets/shop-placeholder.png'

const WomenView = (props) => {
    const womenEntries = props.products.filter(prod => prod.gender == 'womens')

    return (<div>
        <ul>
            {womenEntries.map(prod => <div>
            <img key={prod.id} src={placeholder} alt="placeholder image" className='size-48'/>
            <li key={prod.name}>{prod.name}</li>
            <li key={prod.price+prod.cost}>Price: ${prod.price.toFixed(2)}</li>
            </div>)}
        </ul>
    </div>)
}

export default WomenView;