import {  useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setLoading] = useState(true);

    // sign up user with email password 
    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // sign in user with email password
    const signIn = (email,password) =>{
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
            setLoading(false)
            console.log(currentUser)
        })
        return () =>{
            return unSubscribe();
        }
    },[])
    const authInfo ={
        signUp,
        signIn,
        user,
        setUser,
        loading,
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