const moment = require('moment-timezone')

const conn = require('../config/Conn') 

// Controller Para Obter Todos Os Classificados
const getClassified = async (req, res) => {

    try {
        const [ rows ] = await conn.promise().query(`SELECT * FROM classifieds ORDER BY DATE DESC`)

        if (!rows || rows.length === 0) {
            return res.status(404).json({ msg: 'Nenhum Classificado Encontrado' })
        }

        res.status(200).json( {rows, rowsLength: rows.length})
    } catch (err) {
        console.error('Ocorreu um erro ao listar os classificados:', err)
        res.status(500).json({ msg: 'Erro Interno do Servidor' })
    }
}

// Controller Para Criar Um Classificado
const createClassified = async (req, res) => {
    let { title, description, tag } = req.body;

    if (!title || !description) {
        return res.status(400).json({ msg: 'Título e Descrição não podem ser vazios' })
    }

    if(!tag || tag.length === 0) tag = "Geral"

    try {

        const now = moment().tz('America/Sao_Paulo')
        const formattedDateTime = now.format('YYYY-MM-DD HH:mm:ss')

        await conn.promise().execute(
            "INSERT INTO classifieds (title, description, date, tag) VALUES (?, ?, ?, ?)",
            [title, description, formattedDateTime, tag]
        )

        res.json({ msg: 'Novo Classificado Criado Com Sucesso' })
    } catch (err) {
        console.error('Ocorreu um erro ao criar um classificado:', err)
        res.status(500).json({ msg: 'Erro Interno do Servidor' })
    }
}

module.exports = {
    getClassified,
    createClassified
}