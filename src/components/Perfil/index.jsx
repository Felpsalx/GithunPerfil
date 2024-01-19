import React from 'react'
import styles from './Perfil.module.css'
export default function Perfil({nomeUsuario}) {
  return (
    <header className={styles.header}>
        <img  src={`https://github.com/${nomeUsuario}.png`} alt="" className={styles.avatar} />
        <h1 className={styles.name}>{nomeUsuario}</h1>
    </header>
  )
}
