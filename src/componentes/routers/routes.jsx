import { BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from "../pages/Home" 
import {Login} from "../pages/Login"

import {ProtectorRutas} from "../protector/protectorRutas"
import {Perfil} from "../pages/Perfil"

export  function Miroutes() {
  return (
   <>
    <BrowserRouter>
          <Routes>
              <Route path="/" element ={<ProtectorRutas>
                <Home/>
              </ProtectorRutas>} />
              <Route path="/perfil" element ={<ProtectorRutas> 
                <Perfil/> 
              </ProtectorRutas>} />
              <Route path="/login" element ={<Login/>} />
          </Routes>
    </BrowserRouter>
   </> 
  )
}
