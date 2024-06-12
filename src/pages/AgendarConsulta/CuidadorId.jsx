import { Link } from "react-router-dom"

import styles from "./Cuidadores.module.css"

import cuidadora from '../../img/cuidadora.avif'



const CuidadorId = () => {
  return (
    <div className={styles.container}>

      <div className={styles.cuidadores}>

      <div>

        <img src={cuidadora} alt="" />
       
        <button className="btn"> Ver Detalhes</button>
      </div>

      
      
      </div>


      
    </div>
  )
}

export default CuidadorId
