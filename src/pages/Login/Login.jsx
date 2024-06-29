import React, { useState } from 'react';
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode chamar a função para fazer o login
    // Por exemplo, se você estiver usando o axios, você pode fazer algo assim:
    // axios.post('/api/login', {
    //   email,
    //   senha,
    // })
    //   .then(response => {
    //     // Lógica para lidar com a resposta do servidor
    //   })
    //   .catch(error => {
    //     // Lógica para lidar com erros
    //   });

    // Aqui você pode limpar os campos do formulário após o login
    setEmail('');
    setSenha('');
  };

  return (
    <div className={styles.container}>
      <h2>Faça seu Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Insira seu Email"
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            placeholder="Insira sua Senha"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;