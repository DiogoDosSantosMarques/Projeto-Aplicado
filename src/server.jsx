const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3306; // Porta do servidor

const connection = mysql.createConnection({
  host: 'SG-cuidadoaoidoso-9180-mysql-master.servers.mongodirector.com',
  user: 'erick',
  password: 'Erick23015@',
  database: 'cuidadoaoidoso',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conexão com MySQL estabelecida');
});

app.use(cors());
app.use(express.json());

app.post('/api/register', (req, res) => {
  const { nome, dataNascimento, endereco, email, senha, biografia, experiencia } = req.body;

  const sql = 'INSERT INTO usuario (nome, data_nascimento, endereco, email, senha, biografia, experiencia) VALUES (?, ?, ?, ?, ?, ?, ?)';
  connection.query(sql, [nome, dataNascimento, endereco, email, senha, biografia, experiencia], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      res.status(500).json({ error: 'Erro interno no servidor' });
      return;
    }
    console.log('Dados inseridos com sucesso');
    res.status(200).json({ message: 'Cadastro realizado com sucesso' });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
