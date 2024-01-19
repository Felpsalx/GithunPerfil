import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import RepoList from "./components/RepoList";

function App() {

  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuarios, setNomeUsuario] = useState('')
  return (
    <>
    <input type="text" onBlur={(e)=>
      setNomeUsuario(e.target.value)
    }/>
      

    {nomeUsuarios.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuarios}/>
      <RepoList nomeUsuario={nomeUsuarios}/>
      </>
    )}
      
    
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button  type="button" onClick={()=>{
        setFormularioEstaVisivel(!formularioEstaVisivel)
      }}>Toggle Form</button> */}
    </>
  )
}

export default App
