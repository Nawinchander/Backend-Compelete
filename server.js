require('dotenv').config()
const express = require('express')

const apiRoutes = require('./routes/api')
const app = express()
app.use(express.json())

app.use('./api', apiRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on the port ${process.env.PORT}`)

})



