import {userAuth} from "../context/AuthContext"
import { Navigate } from "react-router-dom"

export const ProtectorRutas = ({children}) => {
    const {user} = userAuth()
    if (user === null) {
        return(
            <Navigate to={"/login"}/>
        )
    }
    return children
}
