const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
app.use(cors())

const loans = require('./data/loans.json')

app.get('/loans', (req, res) => {
    const page = parseInt(req.query.page) || 1
    const itemsPerPage = parseInt(req.query.itemsPerPage) || 10
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = page * itemsPerPage

    const results = {}
    results.totalItems = loans.length

    if (endIndex < loans.length) {
        results.next = {
        page: page + 1,
        itemsPerPage: itemsPerPage
        }
    }

    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            itemsPerPage: itemsPerPage
        }
    }

    results.items = loans.slice(startIndex, endIndex)
    res.status(200).json(results)
})


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
})