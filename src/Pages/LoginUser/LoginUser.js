import React, { useEffect, useState } from 'react';
import UseAuth from '../../Context/UseAuth';

const LoginUser = () => {
    const {user}=UseAuth();
    const [users,setUsers]=useState([]);
//     useEffect(()=>{
//         fetch('http://localhost:5000/users')
//         .then(res=>res.json())
//         .then(data=>setUsers(data));
//         const singleUser=users.filter(allUser=>user.email!==allUser.email)
        

// },[users])

    // const email=user.email;
    // const newUser={email}
    // fetch('http://localhost:5000/users',{
    //     method:'POST',
    //     headers:{
    //         'content-type':'application/json'
    //     },
    //     body:JSON.stringify(newUser)
    // })
    // .then(res=>res.json())

   
    
    return (
        <div>
            
           
        </div>
    );
};

export default LoginUser;