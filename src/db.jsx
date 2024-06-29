import mysql from "mysql"

export const db = mysql.createConnection({
    host: "SG-cuidadoaoidoso-9180-mysql-master.servers.mongodirector.com",
    user: "sgroot",
    password: "U85DoDlJEhXw+Z3K",
    database: "cuidadoaoidoso"
})