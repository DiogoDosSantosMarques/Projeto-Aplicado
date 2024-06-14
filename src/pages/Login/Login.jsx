import styles from "./Login.module.css";

import loginImage from '../../img/login.png';


const Login = () => {
  return (
    <div className={styles.container}>
      <h2>Faça seu Login</h2>

        <label>

          <span>Nome de Usuário:</span>
          <input type="text" name="username" required placeholder="Insira seu Nome de Usuário" />
        </label>

        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Insira sua Senha" />
        </label>

      <div className={styles.imageContainer}>
        <img src={loginImage} alt="Login" />
      </div>
        
      <button className="btn"> Entrar </button>
      
    </div>
  );
};

export default Login;
