import React, { useEffect, useState } from 'react';
import Allproducts from '../AllProducts/Allproducts';

const Explore = () => {
    const [allItem, setAllItems]=useState([])
    useEffect(()=>
    {
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setAllItems(data));
    },[])
    return (
        <div className="container">

           <div className="row row-cols-lg-3 row-cols-1">
                    {
                        allItem.map(allItems=><Allproducts allItems={allItems}></Allproducts>)
                    }

                </div>
        </div>
    );
};

export default Explore;