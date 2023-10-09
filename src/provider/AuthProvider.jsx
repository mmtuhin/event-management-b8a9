import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,updateProfile, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create User Function
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Update user Profile
    const updateUser = (name, photoLink) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoLink
          })
    }

    // User Sign In
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In with Google
    const googleSignIn= () => {
        return signInWithPopup(auth, googleProvider)

    }



    //Observer for user Log Status
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    },[])

    // User SignOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    const authInfo = {
        user,
        createUser,
        signIn,
        googleSignIn,
        updateUser,
        logOut,
        loading,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;