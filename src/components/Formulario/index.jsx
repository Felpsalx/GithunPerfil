import React, { useEffect, useState } from 'react'

export default function Formulario() {
    

    const [materiaA, setmateriaA] = useState(0)
    const [materiaB, setmateriaB] = useState(0)
    const [materiaC, setmateriaC] = useState(0)
    const [nome, setNome] = useState('')

    useEffect(()=>{
        console.log("o estado nome mudou")

        
    },[nome])

    useEffect(()=>{
        console.log("o estado materaiA mudou " + materiaA)
    },[materiaA, materiaB, materiaC])

    useEffect(()=>{
        console.log('Iniciou')

        return ()=>{
            console.log("o componente finalizou")
        }
    },[])

    const alteraNome = (event)=>{
        // console.log(event.target.value)
        // setNome(event.target.value);
        setNome((estadoAnterior)=>{
            return event.target.value
        })
    }
    const renderResult = ()=>{
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3
        // console.log(media)
        if(media >=7){
            return (
                <p>Olá {nome} você foi aprovado com uma media de {media.toFixed(1)}</p>
            )
        }else{
           return(
            <p>Olá {nome} Você foi reprovado com uma media de {media.toFixed(1)}</p>
           )
        }
    }
  return (
    <form>
        <ul>
        {[1,2,3,4,5].map(item=>{
        <li key={item}>{item}</li>
        })}
        </ul>
        <input type="text" onChange={alteraNome}/>
        <input type="number" placeholder='Nota materia A' onChange={({target}) => setmateriaA(parseInt(target.value))} />

        <input type="number" placeholder='Nota materia B'onChange={evento => setmateriaB(parseInt(evento.target.value))} />

        <input type="number" placeholder='Nota materia C' 
        onChange={evento => setmateriaC(parseInt(evento.target.value))} />
        <p>O aluno foi aprovado</p>
        {renderResult()}
    </form>
  )
}
