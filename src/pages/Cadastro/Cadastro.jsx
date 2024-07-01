import React, { useState } from 'react';
import styles from './Cadastro.module.css'; // Importando estilos CSS

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [biografia, setBiografia] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [erroSenha, setErroSenha] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
      setErroSenha(true);
      return;
    }
  
    const userData = {
      nome,
      dataNascimento,
      endereco,
      email,
      senha,
      biografia,
      experiencia,
    };
  
    try {
      const response = await fetch('http://SG-cuidadoaoidoso-9180-mysql-master.servers.mongodirector.com:3306/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }
  
      setShowSuccessMessage(true);
  
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000); // Oculta o sucesso após 3 segundos
  
      // Limpar campos após sucesso
      setNome('');
      setDataNascimento('');
      setEndereco('');
      setEmail('');
      setSenha('');
      setConfirmarSenha('');
      setBiografia('');
      setExperiencia('');
      setErroSenha(false);
  
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
      // Tratar o erro conforme necessário
    }
  };
  

  return (
    <div className={styles.container}>
      <h2>Faça seu Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            placeholder="Insira seu Nome"
          />
        </label>
        <label>
          <span>Data de Nascimento:</span>
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Endereço:</span>
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
            placeholder="Insira seu Endereço"
          />
        </label>
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
        <label>
          <span>Confirmar Senha:</span>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
            placeholder="Confirme sua Senha"
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      {showSuccessMessage && (
        <div className={styles.successMessage}>
          Usuário cadastrado com sucesso!
        </div>
      )}
    </div>
  );
};

export default Cadastro;
