import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.initial";

initializeAuthentication();
    const UseFirebase=()=>
    {
        // const [isLoading, setIsLoading] = useState(true);
        // const [authError, setAuthError] = useState('');
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const [user, setUser]=useState({});
        const [error,setError]=useState('')
        // for google
         const googleSignIn=()=>
         {
             return signInWithPopup(auth, provider)
         }
        //for email pass
        const signInEmail=(email,pass)=>
        {
            
            //console.log(email,pass);
            if(pass.length<6){
                setError('password Should be 6 character long')
                return ;
            }
          
            createUserWithEmailAndPassword(auth, email, pass)
            .then((result)=>
            {
              
                //console.log(result.user)
                setUser(result.user);
                
            })
            .catch((error) => {
               
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
              });


        }
        const loginUser = (email, pass) => {
           console.log(email,pass)
            signInWithEmailAndPassword(auth, email, pass)
                .then((userCredential) => {
                    
                    
                })
                .catch((error) => {
                  
                    const errorMessage = error.message;
                    setError(errorMessage);
                  });
                
                
        }
    

        //logout
        const logOut=()=>
        {
            signOut(auth)
            .then(() => {
                setUser({});
              })
              .catch((error) => {
                setError(error.message)
              });
    
        }
        //state change
      useEffect(()=>
      {
        onAuthStateChanged(auth, (user) => {
            if (user) {
            
                setUser(user);
            } 
          });
      },[])


        return{
            logOut,
            googleSignIn,
            signInEmail,
            user,
            error,
            loginUser
            
           
            
        }
    }
    export default UseFirebase;
