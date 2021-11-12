import React, { useState } from 'react';

const MakeAdmin = (e) => {
    const [email,setEmail]=useState('');
  
    const handleAdmin=(e)=>
    {
        setEmail(e.target.value);
    }
    const handleSubmit=(e)=>
    {
        // e.preventDefault();
        // const user={email};
        // fetch('http://localhost:5000/users/admin',{
        //     method:'PUT',
        //     headers:{
        //         'content-type':'application/json'
        //     },
        //     body:JSON.stringify(user)

        // })
        // .then(res=>res.json())
        // .then(data=>
        //     {console.log(data)});
    }
    return (
        <div>
           
            <form className="mt-3 mb-3 mx-auto w-50" onSubmit={handleSubmit} id="click">
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input onBlur={handleAdmin} type="email" className="form-control w-50" id="exampleFormControlInput1" placeholder="" required/>
                </div>
              <input type="submit" value="Make Admin" className="sign-btn"/>
            </form>

        </div>
       
    );
};

export default MakeAdmin;