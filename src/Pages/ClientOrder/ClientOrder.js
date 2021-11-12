import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ClientOrder = (props) => {
    const {name, email,address, phone,_id}=props.client
    const [usersManage,setUsersManage]=useState([])
    useEffect(()=>
    {
        fetch('http://localhost:5000/client')
        .then(res=>res.json())
        
        .then(data=>setUsersManage(data));
    },[])
 
    const deleteHandle=(id)=>
    {
        const proceed=window.confirm('do you want to delete')
       if(proceed){
        const url = (`http://localhost:5000/client/${id}`);
        fetch(url,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then (data=>{
            if(data.deletedCount>0)
            {
                alert('deleted successfully');
                const remain=usersManage.filter(user=>user._id!==id)
                 setUsersManage(remain);
                 
                
                
            }
        });
 
    }
 }
    return (
        <div>
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><i class="fas fa-envelope-square"></i> {email}</p>
                    <p className="card-text"><i class="fas fa-phone-volume"></i> {phone}</p>
                    <p className="card-text"><i class="fas fa-address-card"></i> {address}</p>
                    <button className="mt-3 sign-btn" onClick={()=> deleteHandle(_id)}>Delete</button>
                </div>
                </div>
              </div>
        </div>
        </div>
    );
};

export default ClientOrder;