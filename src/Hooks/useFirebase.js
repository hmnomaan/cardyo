import initializeFirebase from "../Firebase/firebase.init.js";
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

   

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
               
// location?.state?.from ||
                   
                    const destination = location?.state?.from || '/dashboard';
                    history.replace(destination);
                    
               
                // if (user?.email)
               
                    
                    // location?.state?.from || 
                    // const destination1 = location?.state?.from || '/dashboard';
                    // history.replace(destination1);
                    alert("WelcomeBack ")
                
                
            
                // const destination = location?.state?.from || '/dashboard';
                // history.replace(destination);
                
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

  

    //register
 const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                // history.replace('/dashboard');
                // if (user?.email && admin) {
                //     // const destination = location?.state?.from || '/dashboard/admin-dashboard';
                //     history.replace('/dashboard/admin-dashboard');
                // }
                // else if(user?.email){
                // const destination = location?.state?.from || '/dashboard/dashboard-home';
               
                history.replace('/dashboard/dashboard-home');
                  alert("Welcome To Our Website")
                // } 
                    
                
             })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    useEffect(() => {
        fetch(`https://morning-coast-54846.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://morning-coast-54846.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

  //google sign in  

 const signInWithGoogle = (location, history) => {
        setIsLoading(true);


        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                 setAuthError('');
              
                   
                    // location?.state?.from ||
                // if (user?.email && role===Boolean('admin')) {
                   
                //     const destination = location?.state?.from || '/dashboard/admin-dashboard';
                //      history.replace(destination);
                // }
                //  else {
                     const destination = location?.state?.from || '/dashboard';
                     history.replace(destination);
                     
                
                    
                        
               
                 
               
                    // setAuthError('');
                    // location?.state?.from ||
                    // const destination1 = location?.state?.from || '/dashboard/dashboard-home';
                    // history.replace(destination1);
                     alert("Welcome ")
                
                    
            
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
        


    }






    return {
        user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;

