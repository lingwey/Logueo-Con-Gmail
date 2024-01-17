import { useContext, createContext, useState, useEffect } from "react"
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../../api/firebase.config"

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithRedirect (auth, provider)
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect (() => {
        const unsuscribe = onAuthStateChanged(auth, (currenUser) =>{
            setUser (currenUser)
        })
        return () => {
            unsuscribe ()
        }
    }, [])

    return (
        <AuthContext.Provider value={{googleSignIn, logOut, user}} >
            {children}
        </AuthContext.Provider>
    )
}

export const userAuth = () =>{
    return useContext (AuthContext)
}

