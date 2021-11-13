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
    
    const deleteHandle=(id)=>
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
                alert('deleted successfully');
                const remain=userOrder.filter(user=>user._id!==id)
                 SetUserOrder(remain);
                 
                
                
            }
        });
 
    }
 }
    return (
        <div className="container mt-2">
            
        <div className="row row-cols-lg-2">
        {
            userOrder.map(client=><ClientOrder client={client} key={client._id} deleteHandle={deleteHandle}></ClientOrder>)
        }

        </div>
       
        
    </div>
    );
};

export default MyOrder;