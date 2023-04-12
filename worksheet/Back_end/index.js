const express = require("express")
const cors = require('cors')

const app = express()
const port = 7000
const data = require('./data/wordList.json')

app.use(cors())

// const path = require("path")

// const basePath = path.join(__dirname, 'data')

app.get('/data', (req, res) => {
    res.json(data)
})

app.get('/data/data_2', (req, res) => {
    res.json(data_2)
})

// app.get('/data/db', (req, res) => {
//     res.json(data_3)
// })
app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
