const express = require('express')
const app = express()
const cors = require('cors')
// Rotas
const classifiedRoute = require('./routes/classifiedRoute')

// Configuração de Ambiente
require('dotenv').config()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(classifiedRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})