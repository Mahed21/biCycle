
import { useEffect, useState ,useRef} from 'react';
import { useParams } from 'react-router';
import UseAuth from '../../Context/UseAuth';
import './Purchase.css';


const Purchases = (e) => {
    const {user} = UseAuth();
    const {Id}=useParams();
    const nameRef=useRef();
     const emailRef=useRef()
     const addRef=useRef()
     const phoneRef=useRef()
     const statusRef=useRef();
   
    const [singleData, setSingleData]= useState()
    
    useEffect(()=>
    {
        fetch(`https://afternoon-woodland-81151.herokuapp.com/products/${Id}`)
        .then(res=>res.json())
        .then(data=>setSingleData(data))
    },[])
    
    const handleSubmit=(e)=>
    {
        e.preventDefault();
       
       
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const address=addRef.current.value;
        const phone=phoneRef.current.value;
        const status=statusRef.current.value;
        const newUser={name,email,address,phone,status};
        fetch('https://afternoon-woodland-81151.herokuapp.com/client',{
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
    const buttonClick=(e)=>
    {
        e.preventDefault();
        alert('Please Filled up below form if you are agree to book');
        
    }
    return (
        <div className="container">
            <div className="details-text">
            <h3 className="text-center ">Welcome {user.displayName} </h3>
            <h3 className="text-center">{user.email} </h3>
            <div className="row mt-4 mb-2">
                <div className="col-lg-6 overview">
                    <div className="mt-3">
                   
                    <h4>{singleData?.name}</h4>
                    <h4 className="mt-2"> <i className="fas fa-audio-description service-icon"></i>  {singleData?.description}</h4>
                    <h4 className="mt-2"> <i className="fas fa-audio-description service-icon"></i>  {singleData?.more}</h4>
                    <h4 className="mt-2"> <i className="fas fa-dollar-sign service-icon"></i> {singleData?.cost}</h4>
                    <button className="sign-btn mt-2" onClick={buttonClick}>Book Now</button>
                    </div>

                </div>
                <div className="col-lg-6">
                 <img src={singleData?.img} alt="" className="img-fluid"/>
                </div>
            </div>
            </div>



             {/* form for booking */}
             <form className="mt-3 mb-3" onSubmit={handleSubmit} id="click">
                <h4>Please fill up the form if yor are Interested to book</h4>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" ref={nameRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">BiCycle Name</label>
                <input type="text" value={singleData?.name}className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Adress</label>
                <input type="text" ref={addRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" value={user.email} ref={emailRef} className="form-control w-50" id="exampleFormControlInput1" placeholder="" required/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="text" ref={phoneRef} className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">status</label>
                <input type="text" ref={statusRef} value="pending" className="form-control w-50" id="exampleFormControlInput1" placeholder=""/>
                </div>
                <h4>Gender</h4>
                <div class="col-12 d-flex">
                
                <div class="form-check">
                 <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                 Male
                </label>
                </div>
                <div class="form-check">
                 <input class="form-check-input ms-3" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                    Female
                </label>
                </div>
              </div>
              <input type="submit" value="Submit" className="sign-btn"/>
              </form>
            {/* form for booking end*/}
          
        </div>
    );
};

export default Purchases;