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
    const handleDelete=(id)=>
    {
       const proceed=window.confirm('do you want to delete')
       if(proceed){
         
        const url = (`https://afternoon-woodland-81151.herokuapp.com/products/${id}`);
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then (data=>{
            if(data.deletedCount>0)
            {
                alert('deleted successfully');
                const remain=handleProducts.filter(user=>user._id!==id)
                 setHandleProducts(remain);
                
                
            }
        });
 
    }
 }
    return (
        <div>
        <div className="container">
                <div className="row row-cols-lg-3 row-cols-1">
                    {
                        handleProducts.map(handle=><AllServices handle={handle} handleDelete={handleDelete} key={handle._id}></AllServices>)
                    }

                </div>
            </div>

        </div>
    );
};

export default ManageProduct;