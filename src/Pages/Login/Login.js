import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
    const [email,setEmail]=useState({});
    const [pass,setPass]=useState({});
    const {loginUser,googleSignIn} = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogle = (e) => {
        googleSignIn().then(result => {
                history.push(redirect_uri);
            })
    }
    const emailLogin=(e)=>
    {
        setEmail(e.target.value)
        console.log(e.target.value);

    }
   const passLogin=(e)=>
   {
    setPass(e.target.value)
   }
   

    return (
        <div className="login">
          <h3 className="pt-5 text-center " >Login Form</h3>
            <form className=" row g-3 w-50 mx-auto">
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input onBlur ={emailLogin} type="email" className="form-control" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input onBlur ={passLogin} type="password" className="form-control"/>
                    </div>
                    <div className="col-12">
                    <button className="sign-btn" onClick={(e)=>{
                        e.preventDefault();
                        loginUser(email,pass);

                    }}>Sign in</button>
                    </div>
                    <div className="col-12">
                    <button className="sign-btn" onClick={(e)=>{
                        e.preventDefault();
                        handleGoogle();

                    }}>login With Google</button>
                   </div>
                   <NavLink className=""to="/registerd">
                    Not Registeed?
                  </NavLink>
                   

          </form>
            
        </div>
    );
};

export default Login;