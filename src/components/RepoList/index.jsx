import React, { useEffect, useState } from 'react'
import styles from './RepoList.module.css'
export default function RepoList
({nomeUsuario}) {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    useEffect(()=>{
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`).then(response=>{
            return response.json()
        }).then(res=>{
            setTimeout(()=>{
                setEstaCarregando(false)
                setRepos(res)
            },3000)
        })
    },[nomeUsuario])
  return (
 <div className='container'>
    {estaCarregando ? (
        <h1>Carregando...</h1>
    ): 
    <ul className={styles.list}>
    {repos.map(({id, name, language, html_url})=>(
        <li key={id} className={styles.listItem}>
            <div className={styles.itemName}>
            <b>Nome:</b>{name}
            </div>
        
            <div className={styles.itemLanguage}>
            <b>Liguagem:</b>{language}
            </div>
        
        
            <a className={styles.itemLink} target='_blank' href={html_url} >Visitar GitHub</a>

        </li>
    ))}
    </ul>
    }
    
    </div>
    )
}
