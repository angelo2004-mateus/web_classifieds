const mysql = require('mysql2');
require('dotenv').config();

const conn = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

conn.connect(err => {
    if (err) {
        console.error('Erro Em Conectar Com o Banco De Dados', err)
        return
    }
    console.log('Banco de Dados Conectado')
})

module.exports = conn