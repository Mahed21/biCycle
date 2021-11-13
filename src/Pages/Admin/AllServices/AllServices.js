import React, { useEffect, useState } from 'react';

const AllServices = (props) => {
    const {name,img,description,cost, _id}= props.handle
    const [del,setdel]=useState([])
    useEffect(()=>
    {
        fetch('https://afternoon-woodland-81151.herokuapp.com/products')
        .then(res=>res.json())
        
        .then(data=>setdel(data));
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
                const remain=del.filter(user=>user._id!==id)
                 setdel(remain);
                
                
            }
        });
 
    }
 }
    return (
        <div>
             <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><i class="fas fa-audio-description service-icon"></i> {description}</p>
                    <p className="card-text"><i class="fas fa-dollar-sign service-icon"></i> {cost}</p>
                    <button className=" ms-2 mt-3 sign-btn" onClick={()=> handleDelete(_id)}>Delete</button>
                </div>
                </div>
              </div>
        </div>
        </div>
    );
};

export default AllServices;