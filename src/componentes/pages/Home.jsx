import {userAuth} from "../context/AuthContext"
import { useNavigate } from 'react-router-dom'
import style from "./paginas.module.scss"
import bienvenido from '../../assets/imgenes/imgbienvenida.png'

export  const Home =() => {
  const {user, logOut} = userAuth()
  const cerrarSesion = async () => {
    try {
      await logOut()
    } catch (error) {
      console.error(error)
    }
  }
  const navigation = useNavigate()
  const irPerfil = async () => {
    try {
      navigation("/perfil")
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className={style.div_home}>
      <div className={style.div_bienvenida}>
        <h1>!Bienvenido {user.displayName}¡</h1>
      </div>
        <div className={style.div_btn}>
          <button className={style.btn} onClick={cerrarSesion}>cerrar sesion</button>
          <button className={style.btn} onClick={irPerfil}>perfil</button>
        </div>
        <div className={style.div_imgenbienvenida}>
          <img src={bienvenido} alt="welcom" />
        </div>
    </div>
  )
}
