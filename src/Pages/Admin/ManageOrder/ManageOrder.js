import React, { useEffect, useState } from 'react';
import DisplayClientOrder from '../DisplayClientOrder/DisplayClientOrder';

const ManageOrder = () => {
    const [order,setorder]=useState([]);
    useEffect(()=>
    {
        fetch('https://afternoon-woodland-81151.herokuapp.com/client')
        .then(res=>res.json())
        .then(data=>setorder(data))

    },[])
    return (
        <div>
             <div className="container mt-5">
            <h3 className="allrating">All Order</h3>
            <div className="row row-cols-lg-3 row-cols-1">
                {
                  order.map(orders=><DisplayClientOrder orders={orders}></DisplayClientOrder>)
                }
            </div>
            </div>
        </div>
    );
};

export default ManageOrder;