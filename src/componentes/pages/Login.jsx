import { useEffect } from 'react'
import {userAuth} from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import style from "./paginas.module.scss"
import imgbienvenida from '../../assets/imgenes/imgLogueo.png'

export const Login = () => {
  const navigation = useNavigate()
  const {user,googleSignIn} = userAuth()
  const iniciarSesion = async () => {
    try {
        await googleSignIn ()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (user!=null) {
      navigation ("/")
    }
  }, [user])
 
 

  return (
    <div className= {style.div_login}>

        <h1>iniciar sesion</h1>
        <button onClick={iniciarSesion} className= {style.btn_login}>
          <span>inicio cuenta google</span>
        </button>
        <div className= {style.div_img}>
          <img src= {imgbienvenida}  alt="logueo" />
        </div>
  
    </div>
  )
}
