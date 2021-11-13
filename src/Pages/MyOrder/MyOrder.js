import React from 'react';
import { useState,useEffect } from 'react';
import UseAuth from '../../Context/UseAuth'
import ClientOrder from '../ClientOrder/ClientOrder';

const MyOrder = () => {
    const {user}=UseAuth();
    const [userOrder,SetUserOrder]=useState ([]);
    if(!userOrder.length)
    {
        <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    }
    useEffect(()=>{
        
         if(user.email)
        {
            fetch(`https://afternoon-woodland-81151.herokuapp.com/client/${user.email}`)
            .then(res=>res.json())
            .then(data=>SetUserOrder(data));
        }
      
    },[user])
    return (
        <div className="container mt-2">
            
        <div className="row row-cols-lg-2">
        {
            userOrder.map(client=><ClientOrder client={client} key={client._id}></ClientOrder>)
        }

        </div>
       
        
    </div>
    );
};

export default MyOrder;