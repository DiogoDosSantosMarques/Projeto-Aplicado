import styles from "./Cadastro.module.css";
import React, { useState } from 'react';
import cadastroImage from '../../img/cadastro.png';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [biografia, setBiografia] = useState('');
  const [erroSenha, setErroSenha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      setErroSenha(true);
      return;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Faça seu Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.labelFoto}>
          <span><img src={cadastroImage} alt="" /></span>
        </label>
        <label>
          <span>Nome:</span>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required placeholder="Insira seu Nome" />
        </label>
        <label>
          <span>Data de Nascimento:</span>
          <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
        </label>
        <label>
          <span>Endereço:</span>
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required placeholder="Cidade e Bairro" />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Insira seu E-mail" />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required placeholder="Insira sua Senha" />
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input type="password" value={confirmarSenha} onChange={(e) => {
            setConfirmarSenha(e.target.value);
            setErroSenha(false);
          }} required placeholder="Confirme sua Senha" />
        </label>
        {erroSenha && <p className={styles.error}>As senhas não coincidem.</p>}
        <label>
          <span>Conte um Pouco sobre você:</span>
          <textarea value={biografia} onChange={(e) => setBiografia(e.target.value)} required placeholder="Biografia" />
        </label>
        <button type="submit" className="btn">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
