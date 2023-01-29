require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const converterRoute = require('./routes/converterRoute')

const app = express()

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/convert', converterRoute)

const port = process.env.PORT || 5000
app.listen(process.env.PORT, () => {
        console.log(`listening on port ${port}`)
    })