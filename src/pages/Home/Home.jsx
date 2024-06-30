import styles from "./Home.module.css"

import tocare from "../../img/toCare.jfif"

const Home = () => {
  return (
    <div className={styles.container}>

        <div className={styles.frase}>

          <h3>Conectamos Famílias com <br /> Cuidadores Profissionais <br /> Selecionados e de Confiança</h3>

            <img src={tocare} alt=""  />
          
        </div>

        

        
      
    </div>
  )
}

export default Home
