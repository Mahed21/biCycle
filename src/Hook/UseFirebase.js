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
        const [admin, setAdmin] = useState(false);
        // for google
         const googleSignIn=()=>
         {
             return signInWithPopup(auth, provider)
         }
        //for email pass
        const signInEmail=(email,pass)=>
        {
            
            
            saveUser(email, 'POST');
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
           
            signInWithEmailAndPassword(auth, email, pass)
                .then((result) => {
                    const user = result.user;
                    saveUser(user.email , 'PUT');
                    
                })
                .catch((error) => {
                  
                    const errorMessage = error.message;
                    setError(errorMessage);
                  });
                
                
        }
        useEffect(() => {
            fetch(`https://afternoon-woodland-81151.herokuapp.com/users/${user.email}`)
                .then(res => res.json())
                .then(data => setAdmin(data.admin))
        }, [user.email])
    
    

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


      const saveUser=(email,method)=>
      {
        const user = { email };
        fetch('https://afternoon-woodland-81151.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
      }


        return{
            logOut,
            googleSignIn,
            signInEmail,
            user,
            error,
            loginUser,
            admin
            
           
            
        }
    }
    export default UseFirebase;
