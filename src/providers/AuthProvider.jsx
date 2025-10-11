import {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import useAxiosPublic from '../hooks/useAxiosPublic';
const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    
    // providers
    const googleProvider = new GoogleAuthProvider();

    // sign in with google
    const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // sign up user with email password 
    const signUp = (email,password) =>{
         setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // sign in user with email password
    const signIn = (email,password) =>{
         setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    // user profile updated 
    const updateUser = (userData) =>{
        return updateProfile(auth.currentUser,userData);
    }
    // user logout
    const logout = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                        setLoading(false)
                    }
                })
            }else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            // console.log(currentUser)
        })
        return () =>{
            return unSubscribe();
        }
    },[axiosPublic])
    const authInfo ={
        loading,
        signInWithGoogle,
        signUp,
        signIn,
        user,
        setUser,
        updateUser,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;