import { useState, useEffect } from 'react';

const WomenView = (props) => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const url = 'https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json'
    //     fetch(url)
    //         .then(resp => resp.json())
    //         .then(data => setProducts(data))
    //         .catch(err => console.error(err));
    //     // console.log("fetched??")
    // }, []);

    return (<ul>
        {props.products.map(prod => <li>{prod.id}testing</li>)}
    </ul>)
}

export default WomenView;