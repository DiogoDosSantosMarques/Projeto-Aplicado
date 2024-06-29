import React, { useState } from 'react';
import styles from "./Cadastro.module.css";
import cadastroImage from '../../img/cadastro.png';
import { addUser } from '../../../controllers/user';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      setErroSenha(true);
      return;
    }

    const values = {
      nome,
      dataNascimento,
      endereco,
      email,
      senha,
      biografia,
      experiencia,
    };

    addUser(values, (err, data) => {
      if (err) {
        console.error(err);
        // handle error
      } else {
        console.log(data);
        // handle success
      }
    });

    setNome('');
    setDataNascimento('');
    setEndereco('');
    setEmail('');
    setSenha('');
    setConfirmarSenha('');
    setBiografia('');
    setExperiencia('');
    setErroSenha(false);
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
        {erroSenha && <p className={styles.error}>As senhas não coincidem</p>}
        <label>
          <span>Biografia:</span>
          <textarea
            value={biografia}
            onChange={(e) => setBiografia(e.target.value)}
            placeholder="Digite sua biografia"
          />
        </label>
        <label>
          <span>Experiência:</span>
          <input
            type="text"
            value={experiencia}
            onChange={(e) => setExperiencia(e.target.value)}
            placeholder="Insira sua experiência"
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;