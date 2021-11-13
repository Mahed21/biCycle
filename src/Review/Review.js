import React, { useRef } from 'react';
import UseAuth from '../Context/UseAuth';

const Review = () => {
    const revRef=useRef();
    const emailRef=useRef();
    const {user}=UseAuth();
    const submitRivew=(e)=>
    {
        e.preventDefault();
        const review= revRef.current.value;
        const email=emailRef.current.value;
        const newUser={review,email};
        fetch('https://afternoon-woodland-81151.herokuapp.com/rivew',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>
         {
             if(data.insertedId)
             {
                 alert('Thank you for choose us your data is Successfully Collected');
                 e.target.reset()
             }
         })
    }
 
    return (
        <div className="container">
               
               <div>
               <form className="mt-3 mb-3" onSubmit={submitRivew} id="click">
                <h4>Please fill up the form if yor are Interested to book</h4>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Review</label>
                <input type="text" ref={revRef} className="form-control w-50" id="exampleFormControlInput1" placeholder="give any digit from 1 to 5"/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" value={user.email} ref={emailRef} className="form-control w-50" id="exampleFormControlInput1" placeholder="" required/>
                </div>
               
              <input type="submit" value="Submit" className="sign-btn" />
              </form>
              </div>
        </div>
    );
};

export default Review;