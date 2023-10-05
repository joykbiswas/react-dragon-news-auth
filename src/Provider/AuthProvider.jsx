
import PropTypes from "prop-types";

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser=(email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password);
    }
    //login user
    const logIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }

    //update profile
    const handleUpdateProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }
    //google login
    const googleLogin =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    //Observer user
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        });
        return() =>{
            unSubscribe();
        }
    },[])

    const authInfo={user,createUser,logIn, logOut,handleUpdateProfile,googleLogin, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
  };