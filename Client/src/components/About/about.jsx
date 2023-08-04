import React from 'react';
import styles from './about.module.css'

function About (){
    return (
      <div className={styles.container}>
      <h2 className={styles.title}> About </h2>
      <p className={styles.title}> Bienvenidos a mi app "Rick and Morty" </p>
      <ul className={styles.description}>
        <li> Este es mi primer proyecto </li>
        <li> Realizado en 1 mes </li>
        <li> Espero haber hecho una buena página sin tantos buggs </li>
      </ul>
      <p className={styles.description}> Gracias por llegar hasta acá 🤍 </p>
    </div>
          )
}

export default About;