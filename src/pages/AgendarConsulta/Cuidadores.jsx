import { Link } from "react-router-dom"

import styles from "./Cuidadores.module.css"

import cuidadora from '../../img/cuidadora.avif'
import cuidadora2 from '../../img/cuidadora2.avif'
import cuidadora3 from '../../img/cuidadora3.avif'
import cuidadora4 from '../../img/cuidadora4.avif'
import cuidadora5 from '../../img/cuidadora5.avif'
import cuidadora6 from '../../img/cuidadora6.avif'
import cuidadora7 from '../../img/cuidadora7.avif'
import cuidadora8 from '../../img/cuidadora8.avif'
import cuidadora9 from '../../img/cuidadora9.avif'


const Cuidadores = () => {
  return (
    <div className={styles.container}>

      <div className={styles.cuidadores}>

      <div>

        <img src={cuidadora} alt="" />
       
        <Link to='/cuidadorid' className="btn"> Ver Detalhes</Link>
      </div>

      <div>

      <img src={cuidadora2} alt="" />
      <button className="btn"> Ver Detalhes</button>
     
      </div>

      <div>
        
      <img src={cuidadora3} alt="" />
      <button className="btn"> Ver Detalhes</button>
      </div>

      <div>

      <img src={cuidadora4} alt="" />
       
      <button className="btn"> Ver Detalhes</button>
      </div>

      <div>

      <img src={cuidadora5} alt="" />
      <button className="btn"> Ver Detalhes</button>
      
      </div>

      <div>

      <img src={cuidadora6} alt="" />
      <button className="btn"> Ver Detalhes</button>
      
      </div>

      <div>

      <img src={cuidadora7} alt="" />
      <button className="btn"> Ver Detalhes</button>
      
      </div>

      <div>

      <img src={cuidadora8} alt="" />
        
      <button className="btn"> Ver Detalhes</button>
      </div>

      <div>

      <img src={cuidadora9} alt="" />
        
      <button className="btn"> Ver Detalhes</button>
      </div>
      
      </div>


      {/* <Link to='editarAnuncio'>Editar Anuncio</Link> */}
    </div>
  )
}

export default Cuidadores
