import {userAuth} from "../context/AuthContext"
import style from "./paginas.module.scss"
import imgPerfil from '../../assets/imgenes/imgPerfil.jpg'
export const Perfil =() => {
  const {logOut} = userAuth()
  const cerrarSesion = async () => {
    try {
      await logOut()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className={style.div_perfil}>
      <h1>perfil</h1>
      <button className={style.btn} onClick={cerrarSesion}>cerrar sesion</button>
      <div className={style.div_imgPerfil}>
        <img src={imgPerfil} alt="perfil" />
      </div>
    </div>
  )
}
