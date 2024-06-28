const mysql = require("mysql");

const db = mysql.createPool({
    host: "SG-cuidadoaoidoso-9180-mysql-master.servers.mongodirector.com",
    user: "sgroot",
    password: "U85DoDlJEhXw+Z3K",
    database: "cuidadoaoidoso"
});

App.use(express.json());

App.listen(3306, () => {
    console.log("Rodando na porta 3306");
})