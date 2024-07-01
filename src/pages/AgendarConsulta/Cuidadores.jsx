import { Link } from "react-router-dom";

import styles from "./Cuidadores.module.css";

import cuidadora from '../../img/cuidadora.avif';
import cuidador from '../../img/cuidador.avif';
import cuidadora2 from '../../img/cuidadora2.avif';
import cuidadora3 from '../../img/cuidadora3.avif';
import cuidadora4 from '../../img/cuidadora4.avif';
import cuidadora5 from '../../img/cuidadora5.avif';
import cuidadora6 from '../../img/cuidadora6.avif';
import cuidadora7 from '../../img/cuidadora7.avif';
import cuidadora8 from '../../img/cuidadora8.avif';
import cuidadora9 from '../../img/cuidadora9.avif';

const Cuidadores = () => {
  return (
    <div className={styles.container}>

      <div className={styles.cuidadores}>

        <div className={styles.cuidador}>
          <img src={cuidador} alt="" />
          <div className={styles.conteudo}>
            <h3>Arisson Rodrigues</h3>
            <p>Idade: 35 anos</p>
            <p>Bairro: Centro</p>
            <Link to='/cuidadorid' className="btn">Ver Detalhes</Link>
          </div>
        </div>

        <div className={styles.cuidador}>
          <img src={cuidadora2} alt="" />
          <div className={styles.conteudo}>
            <h3>Ana Paula Lima</h3>
            <p>Idade: 29 anos</p>
            <p>Bairro: João Paulo</p>
            <button className="btn">Ver Detalhes</button>
          </div>
        </div>

        <div className={styles.cuidador}>
          <img src={cuidadora3} alt="" />
          <div className={styles.conteudo}>
            <h3>Rafaela Alves</h3>
            <p>Idade: 32 anos</p>
            <p>Bairro: Trindade</p>
            <button className="btn">Ver Detalhes</button>
          </div>
        </div>

        <div className={styles.cuidador}>
          <img src={cuidadora4} alt="" />
          <div className={styles.conteudo}>
            <h3>Carolina Santos</h3>
            <p>Idade: 27 anos</p>
            <p>Bairro: Campeche</p>
            <button className="btn">Ver Detalhes</button>
          </div>
        </div>

        <div className={styles.cuidador}>
          <img src={cuidadora5} alt="" />
          <div className={styles.conteudo}>
            <h3>Fernanda Oliveira</h3>
            <p>Idade: 29 anos</p>
            <p>Bairro: Lagoa da Conceição</p>
            <button className="btn">Ver Detalhes</button>
          </div>
        </div>

        <div className={styles.cuidador}>
          <img src={cuidadora6} alt="" />
          <div className={styles.conteudo}>
            <h3>Larissa Mendes</h3>
            <p>Idade: 36 anos</p>
            <p>Bairro: Itacorubi</p>
            <button className="btn">Ver Detalhes</button>
          </div>
        </div>

        <div className={styles.cuidador}>
          <img src={cuidadora7} alt="" />
          <div className={styles.conteudo}>
            <h3>Marcos Costa</h3>
            <p>Idade: 24 anos</p>
            <p>Bairro: Canasvieiras</p>
            <button className="btn">Ver Detalhes</button>
          </div>
        </div>

        <div className={styles.cuidador}>
          <img src={cuidadora8} alt="" />
          <div className={styles.conteudo}>
            <h3>Patrícia Oliveira</h3>
            <p>Idade: 30 anos</p>
            <p>Bairro: Coqueiros</p>
            <button className="btn">Ver Detalhes</button>
          </div>
        </div>

        <div className={styles.cuidador}>
          <img src={cuidadora9} alt="" />
          <div className={styles.conteudo}>
            <h3>Roberto Almeida</h3>
            <p>Idade: 36 anos</p>
            <p>Bairro: Ingleses</p>
            <button className="btn">Ver Detalhes</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Cuidadores;
