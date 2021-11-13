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
    const handleDelete=(id)=>
    {
        const proceed=window.confirm('do you want to delete')
       if(proceed){
        const url = (`https://afternoon-woodland-81151.herokuapp.com/client/${id}`);
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then (data=>{
            if(data.deletedCount>0)
            {
                //alert('deleted successfully');
                const remain=order.filter(user=>user._id!==id)
                 setorder(remain);
                  alert('Succesfully deleted');

                 
             }
            
        });
       
 
    }
 }

    return (
        <div>
             <div className="container mt-5">
            <h3 className="allrating">All Order</h3>
            <div className="row row-cols-lg-3 row-cols-1">
                {
                  order.map(orders=><DisplayClientOrder orders={orders} key={order._id} handleDelete={handleDelete}></DisplayClientOrder>)
                }
            </div>
            </div>
        </div>
    );
};

export default ManageOrder;