import React, { useEffect, useState } from 'react';


const DisplayClientOrder = (props) => {
    const {name,email,address,status,phone,_id}=props.orders
    const [usersManage,setUsersManage]=useState([])
    useEffect(()=>
    {
        fetch('https://afternoon-woodland-81151.herokuapp.com/client')
        .then(res=>res.json())
        
        .then(data=>setUsersManage(data));
    },[])
    
    const updatetoActivate =(id)=>
    {
         const url = (`https://afternoon-woodland-81151.herokuapp.com/client/${id}`);
        fetch(url,{
            method:"PUT",
            headers:
            {
                'content-type':'appplication/json'
            },
            body:JSON.stringify(usersManage)
        })
        .then()

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
                    <p className="card-text"><i class="fas fa-address-card"></i> {status}</p>
                    <button className="ms-3 sign-btn" onClick={()=>updatetoActivate(_id)}>Activate</button>
                    <button className=" ms-2 mt-3 sign-btn" onClick={()=> props.handleDelete(_id)}>Delete</button>
                </div>
                </div>
              </div>
        </div>
        </div>
    );
};

export default DisplayClientOrder;
