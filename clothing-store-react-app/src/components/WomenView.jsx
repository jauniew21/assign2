import { useState, useEffect } from 'react';
import placeholder from '../assets/shop-placeholder.png';
import { Link } from 'react-router-dom';
import AddItemButton from './AddItemButton';

const WomenView = (props) => {
    let genderHeader = ""
    console.log(props.gender);
    let womenEntries = []

    if (props.gender) {
        womenEntries = props.products.filter(prod => prod.gender == 'womens')
        genderHeader = "Womens"
    } else {
        womenEntries = props.products.filter(prod => prod.gender == 'mens')
        genderHeader = "Mens"
    }

    return (<div className='pt-16'>
        <div className="w-full h-28 overflow-hidden pb-10 relative">
            <img
                src={placeholder}
                alt="placeholder"
                className="w-full h-full object-cover"
            />
            <p className='font-bold absolute bottom-16 left-146 text-black text-xl'>{genderHeader}</p>
        </div>

        <ul className="grid grid-cols-4 gap-6">
            {womenEntries.map(prod =>
                <li key={prod.id} className='flex flex-col items-center'>
                    <div className='group relative'>
                        <img key={prod.price + prod.id} src={placeholder} alt="placeholder image" className='size-48' />
                        <div className="absolute bottom-1 right-1 invisible group-hover:visible">
                            <AddItemButton prod={prod}/>
                        </div>
                    </div>
                    <Link to={`/product/${prod.name}`} key={prod.name} className=''>{prod.name}</Link>
                    <p key={prod.price - prod.id}>Price: ${prod.price.toFixed(2)}</p>
                </li>)}
        </ul>
    </div>)
}

export default WomenView;