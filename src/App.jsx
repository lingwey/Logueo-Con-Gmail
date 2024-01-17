import {AuthContextProvider} from './componentes/context/AuthContext'
import {Miroutes} from './componentes/routers/routes'


function App() {

  return (
       <AuthContextProvider>
          <div>
            <Miroutes/>
          </div>
       </AuthContextProvider>

  )
}


export default App
