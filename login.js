const express = require('express')
const loginRouter = express.Router()

loginRouter.get('/', (req,res) => {
    res.sendFile( __dirname + "/public/" + "login.html" )
})

module.exports = loginRouter