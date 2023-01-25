require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
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

// mongoose.connect(process.env.URL)
//     .then(() => {
//         app.listen(process.env.PORT, () => {
//             console.log(`Connected to Database & listening on port ${process.env.PORT}`)
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     })

app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`)
        })