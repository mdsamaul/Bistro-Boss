import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";

import axios from 'axios';
import app from './../Firebase/Firebase.config.js';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // create a new user
    const createANewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login in a new user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    // update user profile
    const updateUserProfile = (name, photourl) => {
        return updateProfile(auth, name, photourl);
    }

    // sign in with google
    const signinWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, courrentUser => {
            setUser(courrentUser);

            if (courrentUser && courrentUser.email) {
                axios.post('http://localhost:5000/jwt', {
                    email: courrentUser.email
                })
                    .then(data => {
                        localStorage.setItem('access_token', data.data.token)
                    })
                    .catch(error => {
                        console.log(error);
                    })
            } else {
                console.log("log out");
                localStorage.removeItem("access_token");
            }

            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createANewUser,
        loginUser,
        logOutUser,
        updateUserProfile,
        signinWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;