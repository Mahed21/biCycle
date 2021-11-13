import React, { useEffect, useState } from 'react';
import AllServices from '../AllServices/AllServices';

const ManageProduct = () => {
    const [handleProducts, setHandleProducts]=useState([])
    useEffect(()=>
    {
        fetch('https://afternoon-woodland-81151.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setHandleProducts(data));
    },[])
    useEffect(()=>
    {
       
    },[])
    return (
        <div>
        <div className="container">
                <div className="row row-cols-lg-3 row-cols-1">
                    {
                        handleProducts.map(handle=><AllServices handle={handle}></AllServices>)
                    }

                </div>
            </div>

        </div>
    );
};

export default ManageProduct;