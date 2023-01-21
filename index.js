require('dotenv').config()

const express = require('express')
const cors = require('cors')
const fileRoutes = require('./routes/fileRoutes')

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/convert', fileRoutes)

app.listen(process.env.PORT, () => {
    console.log(`listening to port ${process.env.PORT}`)
})