// import {useState, useEffect} from 'react';

// const App = () => {
    // useEffect( () => {
    // const url = 'https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json'
    // fetch(url)
    //     .then(resp => resp.json())
    //     .then(data)
async function getData(url) {
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data)
}

const url = 'https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json'


// }