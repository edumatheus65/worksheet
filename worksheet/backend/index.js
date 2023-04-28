const express = require('express')
const cors = require('cors')
const config = require('./src/config/config')
const data = require('./src/data/wordList.json')

const app = express()

const port = config.config.port
app.use(cors())


app.get('/data', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)    
})

