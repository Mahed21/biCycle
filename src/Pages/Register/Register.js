import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';
import { useHistory } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const {signInEmail, error, isloading}=UseAuth();
    const [email,setEmail]=useState({});
    const [pass,setPass]=useState({});
    const history=useHistory();
  
    const handleRegistration=(e)=>
   {
       
       e.preventDefault();
   }
   const handleEmail=(e)=>
   {
       setEmail(e.target.value)
   }
   const HandlePassword=(e)=>
   {
       setPass(e.target.value)
   }

    return (
        <div>
              <h3 className="text-center mt-5 reg-form">Registration Form</h3>
              {
                  !isloading && <form className="row g-3 w-50 mx-auto form-design" onSubmit={handleRegistration}>
                  <div className="col-md-6">
                     <label for="inputEmail4" className="form-label"> First Name</label>
                     <input type="name" className="form-control" id="inputEmail4"/>
                 </div>
                 <div className="col-md-6">
                     <label for="inputEmail4" className="form-label"> Last Name</label>
                     <input type="name" className="form-control" id="inputEmail4"/>
                 </div>
                 <div className="col-md-12">
                     <label for="inputEmail4" className="form-label"> Full Name</label>
                     <input type="name" className="form-control" id="inputEmail4"/>
                 </div>
                 <div className="col-md-6">
                     <label for="inputEmail4" className="form-label">Email</label>
                     <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail4" required/>
                 </div>
                 <div className="col-md-6">
                     <label for="inputPassword4" className="form-label">Password</label>
                     <input onBlur={HandlePassword} type="password" className="form-control" id="inputPassword4"/>
                 </div>
                 
                 <div>{error}</div>
                 
                   <div className="col-12  mb-4">
                     <button onClick={(e)=>{
                         e.preventDefault();
                         signInEmail(email,pass,history);
 
                     }} type="submit" className="sign-btn">Registerd</button>
 
                     <NavLink to="/login" className="ms-3 writing">Already Registerd?</NavLink>
                 </div>
             </form>
              }
              
            
        </div>
    );
};

export default Register;