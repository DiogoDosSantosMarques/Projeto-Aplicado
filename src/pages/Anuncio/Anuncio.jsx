import styles from "./Anuncio.module.css"

import profileImage from '../../img/camera.png'

const Anuncio = () => {
  return (
    <div className={styles.container}>
        
    
        <h2>Faça seu Cadastro como Cuidador</h2>
      




        <form>

        <label className={styles.labelFoto}>


        <span><img src={profileImage} alt="" /></span>

        <input type="file" id="foto" name="foto"required />

      </label>


      <label>

      <span>Nome:</span>

      <input type="text" name="text" required placeholder="Insira seu Nome: "/>


      </label>

      <label>

    <span>Experiência:</span>

    <input type="text" name="text" required placeholder="Tempo de Experiência: "/>


    </label>


    <label>

    <span>Endereço:</span>

    <input type="text" name="text" required placeholder="Cidade e Bairro: "/>


    </label>


    <label>

          <span>Conte um Pouco sobre você:</span>

          <textarea name="body" required placeholder="Biografia: "

          ></textarea>

        </label>

        
        <button className="btn"> Cadastrar </button>
        </form>
      
    </div>
  )
}

export default Anuncio
