import React, { useEffect, useState } from 'react';
import Allproducts from '../AllProducts/Allproducts';

const Explore = () => {
    const [allItem, setAllItems]=useState([])
    useEffect(()=>
    {
        fetch('https://afternoon-woodland-81151.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setAllItems(data));
    },[])
    return (
        <div className="container">

           <div className="row row-cols-lg-3 row-cols-1">
                    {
                        allItem.map(allItems=><Allproducts allItems={allItems} key={allItem._id}></Allproducts>)
                    }

                </div>
        </div>
    );
};

export default Explore;