const express = require('express')
const server = express()

require('dotenv').config()
const PORT = process.env.PORT || 8080

server.listen(PORT, ()=> {
    console.log(`${PORT} is running`)
    console.log(`${process.env.MESSAGE}`)
})