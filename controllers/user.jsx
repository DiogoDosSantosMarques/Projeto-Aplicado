import {db} from "../src/db";

export const getUsers = (_,res) => {
  const q = "SELECT * FROM usuario";

  db.query(q, (err, data) => {
      if(err) return res.json(err);

      return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = 
      "INSERT INTO usuario(`nome`, `data_de_nascimento`,`endereco`, `email`, `senha`, `biografia`, `experiencia`) VALUES(?)";

  const values = [
        req.body.nome,
        req.body.data_de_nascimento,
        req.body.endereco,
        req.body.email,
        req.body.senha,
  ];

  db.query(q, [values], (err) => {
        if(err) return res.json(err);

    return res.status(200).json("Usuário cadastrado com sucesso.");
  });
};

export const updateUser = (req, res) => {
    const q =
      "UPDATE usuario SET `nome` =?, `data_de_nascimento` =?,`endereco` =?, `email` =?, `senha` =?, `biografia` =?, `experiencia` =? " 

    const values = [
          req.body.nome,
          req.body.data_de_nascimento,
          req.body.endereco,
          req.body.email,
          req.body.senha,
    ];
  
    db.query(q, [...values, req.params.id], (err) => {
          if(err) return res.json(err);
  
      return res.status(200).json("Usuário cadastrado com sucesso.");
    });
  };