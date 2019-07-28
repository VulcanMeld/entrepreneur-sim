const express = require('express')
const accountRouter = express.Router()

loginRouter.get('/', (req,res) => {
    res.sendFile( __dirname + "/public/" + "account.html" )
})

module.exports = accountRouter