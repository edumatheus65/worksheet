const express = require("express")
const cors = require('cors')

const app = express()
const port = 7000
const data = require('./src/data/wordList.json')

app.use(cors())

app.get('/data', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
